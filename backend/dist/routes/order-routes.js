"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const order_controllers_1 = require("../controllers/order-controllers");
const OrderRouter = express_1.default.Router();
OrderRouter.get("/", auth_1.jwtCheck, auth_1.jwtParse, order_controllers_1.OrderController.getMyOrders);
OrderRouter.post("/checkout/create-checkout-session", auth_1.jwtCheck, auth_1.jwtParse, order_controllers_1.OrderController.createCheckoutSession);
OrderRouter.post("/checkout/webhook", order_controllers_1.OrderController.stripeWebhookHandler);
exports.default = OrderRouter;
