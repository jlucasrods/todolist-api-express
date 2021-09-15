import express from "express";
const app = express();

import userRoutes from "./user/routes";
import taskRoutes from "./task/routes";

app.use("/user", userRoutes);
app.use("/task", taskRoutes);

app.listen(8080);