import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";

import taskRoutes from "./task/routes";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/task", taskRoutes);

mongoose.connect(process.env.MONGO_URI, console.log);

app.listen(8080, () => console.log("Listening to port 8080!"));