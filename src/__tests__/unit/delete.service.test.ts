import { prisma } from "../../database/prisma";
import { carService } from "../../services";

describe("Car service delete unit tests", () => {
    
    beforeAll(async () => {
        await prisma.car.deleteMany();
    });
    
    const service = new carService();

    test("Should be able to delete a car by id", async () => {

        const testCar = await service.create({
            name: "Logan",
            description: "Full",
            brand: "Reanult",
            year: 2021,
            km: 20000,
        });

        await service.delete(testCar.id)

        const cars = await prisma.car.findMany();

        expect(cars).toEqual([]);
    });

    test("Should throw an error when trying to delete a car with non existing id", async () => {
        const nonExistingId = "ssssssssssssssss";
    
        expect(service.delete(nonExistingId)).rejects.toThrow("Car not found.");
      });
});