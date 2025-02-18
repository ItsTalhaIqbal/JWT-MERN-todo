import {Router} from 'express'
import { AuthSignupData } from '../middlewares/auth.midleware.js'
import { login, signup, tokenAuth } from '../controller/Auth.controller.js'

const Auth = Router()

Auth.post("/signup",AuthSignupData,signup)
Auth.post("/login",login)
Auth.post("/auth",tokenAuth)



export {Auth}