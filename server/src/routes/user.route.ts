import { Router } from "express";
import { userValidator } from "../validators/user.validator";
import { userController } from "../controllers/user/user.controller";
import { authenticate } from "../middleware/auth";

const router = Router();

router.post("/", userValidator.register, userController.register);
router.put("/verify-email/:token", userController.verifyEmail);
router.get("/:id", authenticate, userController.getUser);
router.post(
  "/reset-password",
  userValidator.resetPassword,
  userController.resetPassword
);

router.put(
  "/password/:token",
  userValidator.confirmResetPassword,
  userController.confirmResetPassword
);

export default router;
