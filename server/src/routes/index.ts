import { Request, Response, Router } from "express";
import user from "./user.route";
import auth from "./auth.route";
import document from "./document.route";
import { authenticate, authorize } from "../middleware/auth";
import RoleEnum from "../types/enums/role-enum";

const router = Router();

router.get(
  "/",
  authenticate,
  authorize([RoleEnum.SUPERADMIN]),
  async (req: Request, res: Response) => {
    return res.sendStatus(200);
  }
);

router.use("/user", user);
router.use("/auth", auth);
router.use("/document", document);

export default router;
