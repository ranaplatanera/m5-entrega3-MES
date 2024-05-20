import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

export class EnsureCarMiddleware {
  public idExists = async (req: Request, res: Response, next: NextFunction) => {
    const foundCar = await prisma.car.findFirst({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!foundCar) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.locals = { foundCar };

    return next();
  };
}

export const ensureCar = new EnsureCarMiddleware();