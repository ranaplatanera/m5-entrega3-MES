import { prisma } from "../../database/prisma";
import { carService } from "../../services";

describe("Car service retrieve unit tests", () => {
    
    beforeAll(async () => {
        await prisma.car.deleteMany();
    });
    
    const service = new carService();

    test("Should be able to retrieve a car by id", async () => {
        const testCar = await service.create({
            name: "Logan",
            description: "Full",
            brand: "Reanult",
            year: 2021,
            km: 20000,
        });

        const receivedValue = await service.retrieve(testCar.id);

        const expectedValue = {
            id: testCar.id,
            name: "Logan",
            description: "Full",
            brand: "Reanult",
            year: 2021,
            km: 20000,
        }

        expect(receivedValue).toEqual(expectedValue);
    });

    test("Should throw an error when trying to retrieve a car with non existing id", async () => {
        const nonExistingId = "ssssssssssssssss";
    
        expect(service.retrieve(nonExistingId)).rejects.toThrow("Car not found.");
      });
});