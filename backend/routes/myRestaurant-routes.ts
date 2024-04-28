import express from "express";
import multer from "multer";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validate";
import { MyRestaurantController } from "../controllers/myRestaurant-controllers";


const MyRestaurantRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

MyRestaurantRouter.get(
  "/order",
  jwtCheck,
  jwtParse,
  MyRestaurantController.getMyRestaurantOrders
);

MyRestaurantRouter.patch(
  "/order/:orderId/status",
  jwtCheck,
  jwtParse,
  MyRestaurantController.updateOrderStatus
);

MyRestaurantRouter.get("/", jwtCheck, jwtParse, MyRestaurantController.getMyRestaurant);

MyRestaurantRouter.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.createMyRestaurant
);

MyRestaurantRouter.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.updateMyRestaurant
);

export default MyRestaurantRouter;