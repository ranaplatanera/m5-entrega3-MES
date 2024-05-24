import { Router } from "express";
import { carController } from "../controllers";
import { ensure, ensureCar } from "../middlewares";
import { carCreateSchema } from "../schemas";

export const carRouter = Router();

carRouter.post("", ensure.bodyIsValid(carCreateSchema), carController.create);
carRouter.get("", carController.list);
carRouter.use("/:id", ensureCar.idExists);
carRouter.get("/:id", carController.retrieve);
carRouter.patch("/:id", carController.update);
carRouter.delete("/:id", carController.delete);