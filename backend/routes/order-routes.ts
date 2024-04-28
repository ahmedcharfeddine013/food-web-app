import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { OrderController } from "../controllers/order-controllers";

const OrderRouter = express.Router();

OrderRouter.get("/", jwtCheck, jwtParse, OrderController.getMyOrders);

OrderRouter.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  OrderController.createCheckoutSession
);

OrderRouter.post("/checkout/webhook", OrderController.stripeWebhookHandler);

export default OrderRouter;