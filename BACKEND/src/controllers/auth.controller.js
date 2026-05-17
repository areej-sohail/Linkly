import WrapAsync from "../utils/tryCatchWrapper.js"
import { registerUser, loginUser } from "../services/auth.service.js"
import { cookieOptions } from "../config/config.js"

export const register_user = WrapAsync(async(req, res)=>{
    const {name, email, password} = req.body
    const {token,user} = await registerUser(name, email, password)
    req.user = user
    res.cookie("accessToken",token, cookieOptions)
    res.status(200).json({
        message:"Sign Up successful",
        user: { name: user.name, email: user.email, _id: user._id }
    })
})

export const login_user = WrapAsync(async(req, res)=>{
    const {email, password} = req.body
    const {token, user} = await loginUser(email,password)
    req.user = user
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({
        message:"Login successful",
        user: { name: user.name, email: user.email, _id: user._id }
    })
})

export const logout_user = WrapAsync(async(req, res) => {
    res.clearCookie("accessToken", cookieOptions)
    res.status(200).json({ message: "Logged out successfully" })
})