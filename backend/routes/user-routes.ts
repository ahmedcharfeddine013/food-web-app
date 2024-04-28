import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { MyUserController } from "../controllers/user-controllers";
import { validateMyUserRequest } from "../middleware/validate";

const UserRouter = express.Router();

// /api/my/user
UserRouter.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
UserRouter.post("/", jwtCheck, MyUserController.createCurrentUser);
UserRouter.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

export default UserRouter;
