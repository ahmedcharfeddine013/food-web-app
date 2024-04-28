"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const cloudinary_1 = require("cloudinary");
const user_routes_1 = __importDefault(require("../routes/user-routes"));
const order_routes_1 = __importDefault(require("../routes/order-routes"));
const myRestaurant_routes_1 = __importDefault(require("../routes/myRestaurant-routes"));
const restaurant_routes_1 = __importDefault(require("../routes/restaurant-routes"));
mongoose_1.default
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log("Connected to database!"));
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/api/order/checkout/webhook", express_1.default.raw({ type: "*/*" }));
app.use(express_1.default.json());
app.get("/health", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ message: "health OK!" });
}));
app.use("/api/my/user", user_routes_1.default);
app.use("/api/my/restaurant", myRestaurant_routes_1.default);
app.use("/api/restaurant", restaurant_routes_1.default);
app.use("/api/order", order_routes_1.default);
app.listen(7000, () => {
    console.log("server started on localhost:7000");
});
