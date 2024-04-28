"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const auth_1 = require("../middleware/auth");
const validate_1 = require("../middleware/validate");
const myRestaurant_controllers_1 = require("../controllers/myRestaurant-controllers");
const MyRestaurantRouter = express_1.default.Router();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, //5mb
    },
});
MyRestaurantRouter.get("/order", auth_1.jwtCheck, auth_1.jwtParse, myRestaurant_controllers_1.MyRestaurantController.getMyRestaurantOrders);
MyRestaurantRouter.patch("/order/:orderId/status", auth_1.jwtCheck, auth_1.jwtParse, myRestaurant_controllers_1.MyRestaurantController.updateOrderStatus);
MyRestaurantRouter.get("/", auth_1.jwtCheck, auth_1.jwtParse, myRestaurant_controllers_1.MyRestaurantController.getMyRestaurant);
MyRestaurantRouter.post("/", upload.single("imageFile"), validate_1.validateMyRestaurantRequest, auth_1.jwtCheck, auth_1.jwtParse, myRestaurant_controllers_1.MyRestaurantController.createMyRestaurant);
MyRestaurantRouter.put("/", upload.single("imageFile"), validate_1.validateMyRestaurantRequest, auth_1.jwtCheck, auth_1.jwtParse, myRestaurant_controllers_1.MyRestaurantController.updateMyRestaurant);
exports.default = MyRestaurantRouter;
