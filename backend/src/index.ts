import mongoose from "mongoose";
import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

import UserRouter from "../routes/user-routes";
import OrderRouter from "../routes/order-routes";
import MyRestaurantRouter from "../routes/myRestaurant-routes";
import RestaurantRouter from "../routes/restaurant-routes";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(cors());

app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));

app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", UserRouter);
app.use("/api/my/restaurant", MyRestaurantRouter);
app.use("/api/restaurant", RestaurantRouter);
app.use("/api/order", OrderRouter);

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});