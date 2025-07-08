import { handleError } from "../helpers/handleError.js";
import User from "../models/user.model.js";
import bcryptjs, { compare } from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      // user already registered
      return next(handleError(400, "User already registered"));
    }
    // Register user
    const hashedPassword = bcryptjs.hashSync(password)
    const user = new User({
      name, email, password: hashedPassword
    })
    await user.save()
    res.status(200).json({
      success: true,
      message: "User registered successfully"
    })

  } catch (error) {
    next(handleError(500, error.message))
  }
}

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      next(handleError(400, "Invalid email or password"))
    }

    const hashedPassword = user.password
    const comparePassword = bcryptjs.compare(password, hashedPassword)
    if (!comparePassword) {
      next(handleError(400, "Invalid email or password"))
    }

    const token = jwt.sign({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    }, process.env.JWT_SECRET)

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    })

    res.status(200).json({
      success: true,
      message: "login successfully"
    })

  } catch (error) {
    next(handleError(500, error.message))
  }
}