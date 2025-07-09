import express from "express";
import { googleLogin, login, register } from "../controllers/Auth.controller.js";

const AuthRoute = express.Router()

AuthRoute.post("/register", register)
AuthRoute.post("/login", login)
AuthRoute.post("/google-login", googleLogin)

export default AuthRoute