"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const user_controllers_1 = require("../controllers/user-controllers");
const validate_1 = require("../middleware/validate");
const UserRouter = express_1.default.Router();
// /api/my/user
UserRouter.get("/", auth_1.jwtCheck, auth_1.jwtParse, user_controllers_1.MyUserController.getCurrentUser);
UserRouter.post("/", auth_1.jwtCheck, user_controllers_1.MyUserController.createCurrentUser);
UserRouter.put("/", auth_1.jwtCheck, auth_1.jwtParse, validate_1.validateMyUserRequest, user_controllers_1.MyUserController.updateCurrentUser);
exports.default = UserRouter;
