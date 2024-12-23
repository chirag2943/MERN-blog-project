import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import projectRoutes from "./routes/project.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  // eslint-disable-next-line no-undef
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected");
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/project", projectRoutes);

app.use((err, req, res, next) => {
  const statuscode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statuscode).json({
    sucess: false,
    statuscode,
    message,
  });
});
