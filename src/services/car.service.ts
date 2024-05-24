import { Car, CarCreate, CarUpdate } from "../interfaces";
import { prisma } from "../database/prisma";
import { carSchema } from "../schemas";


export class carService {
    private car = prisma.car;

    public list = async (): Promise<Array<Car>> => {
        const cars = await prisma.car.findMany();

        return carSchema.array().parse(cars);
    };

    public retrieve = async (carId: string): Promise<Car> => {
        const car = await prisma.car.findUnique( {
            where: { id: carId },
          });

        if (!car) {
            throw new Error("Car not found.");
        }

        return carSchema.parse(car);
    };

    public create = async (payload: CarCreate): Promise<Car> => {
        const newCar = await prisma.car.create({ data: payload });
    
        return carSchema.parse(newCar);
    };

    public update = async (carId: string, payload: CarUpdate): Promise<Car> => {
        const car = await prisma.car.findUnique( {
            where: { id: carId },
          });

        if (!car) {
            throw new Error("Car not found.");
        }
        
        const updatedCar = await prisma.car.update({ where: {id: carId}, data: payload });

        return carSchema.parse(updatedCar);
    };

    public delete = async (carId: string): Promise<void> => {
        const car = await prisma.car.findUnique( {
            where: { id: carId },
          });

        if (!car) {
            throw new Error("Car not found.");
        }

        await prisma.car.delete({ where: { id: carId } });
    };

}