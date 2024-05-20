import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import "express-async-errors";
import { carRouter } from "./routers";
import { handleErrors } from "./middlewares";

export const app = express();

app.use(helmet());

app.use(express.json());

app.use("/cars", carRouter);

app.use(handleErrors.execute);