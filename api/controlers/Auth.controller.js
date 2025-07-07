import { handleError } from "../helpers/handleError.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if(checkUser) {
      // user already registered
      next(handleError(400, "User already registered"));
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

export const login = async (req, res) => {

}