import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { ApplicationRouters } from "./app/routes";
import logger from "./utils/logger";

dotenv.config();
const app = express();

//connect to mongoDb database

mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => logger.info("MongoDB is connected Successfully !"))
  .catch((err) => {
    logger.error(err.message);
  });

/**middlewares */
app.use(cookieParser());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: false }));

// Cross Origin Resource Sharing

/**
 * write frontend route here
 */
app.use(
  cors({
    credentials: true,
    origin: [],
  })
);

app.use("/api/v1", ApplicationRouters);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => logger.info(`Express Server running on port ${PORT}`));
