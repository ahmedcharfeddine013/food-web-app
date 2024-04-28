import express from "express";
import { param } from "express-validator";
import { RestaurantController } from "../controllers/restaurant-controllers";

const RestaurantRouter = express.Router();

RestaurantRouter.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId paramenter must be a valid string"),
  RestaurantController.getRestaurant
);

RestaurantRouter.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City paramenter must be a valid string"),
  RestaurantController.searchRestaurant
);

export default RestaurantRouter;
