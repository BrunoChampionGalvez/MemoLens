import { Router } from "express"
import { authRouter } from "./auth/auth-routers"

export const router = Router()

router.use(authRouter)