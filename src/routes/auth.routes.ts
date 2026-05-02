import { Router } from "express";
import { AuthController } from "@/controllers/auth.controller";
import { validateSchema } from "@/middlewares/validate-schema-middleware";
import { signupSchema, verifyEmailSchema, loginSchema } from "@/schema/auth";
import { AuthMiddleware } from "@/middlewares/auth-middleware";
import { permittedRole } from "@/middlewares/rbac-middleware";
import { Role } from "@/generated/prisma";

const router = Router();
const authController = new AuthController();
const authMiddleware = new AuthMiddleware();

router.post("/v1/signup", validateSchema(signupSchema), authController.signup);
router.get("/v1/verify-email", validateSchema(verifyEmailSchema), authController.verifyEmail);
router.post("/v1/login", validateSchema(loginSchema), authController.login);

router.get("/v1/profile", authMiddleware.execute, permittedRole([Role.ADMIN]), (_req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Hello"
  })
})

export default router;