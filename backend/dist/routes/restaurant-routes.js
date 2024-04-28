"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const restaurant_controllers_1 = require("../controllers/restaurant-controllers");
const RestaurantRouter = express_1.default.Router();
RestaurantRouter.get("/:restaurantId", (0, express_validator_1.param)("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId paramenter must be a valid string"), restaurant_controllers_1.RestaurantController.getRestaurant);
RestaurantRouter.get("/search/:city", (0, express_validator_1.param)("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City paramenter must be a valid string"), restaurant_controllers_1.RestaurantController.searchRestaurant);
exports.default = RestaurantRouter;
