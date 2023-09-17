import { Router } from "express";

import { authValidator } from "../validators/auth.validator";
import { authController } from "../controllers/auth/auth.controller";
import { authenticate } from "../middleware/auth";

const router = Router();

router.post("/login", authValidator.login, authController.login);

router.post(
  "/refresh-token",
  authValidator.refreshToken,
  authController.refreshToken
);

router.delete("/logout", authenticate, authController.logout);

export default router;
