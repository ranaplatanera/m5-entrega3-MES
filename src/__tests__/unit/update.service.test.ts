import { prisma } from "../../database/prisma";
import { carService } from "../../services";

describe("Car service uptade unit tests", () => {
    
    beforeAll(async () => {
        await prisma.car.deleteMany();
    });
    beforeEach(async () => {
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

        const toUpdatePayload = {
            description: "Usado",
            km: 100000,
        };

        const receivedValue = await service.update(testCar.id, toUpdatePayload);

        const expectedValue = {
            id: testCar.id,
            name: "Logan",
            description: toUpdatePayload.description,
            brand: "Reanult",
            year: 2021,
            km: toUpdatePayload.km,
        };

        expect(receivedValue).toEqual(expectedValue);
    });

    test("Should throw an error when trying to update a car with non existing id", async () => {
        const nonExistingId = "ssssssssssssssss";
    
        expect(service.update(nonExistingId, {})).rejects.toThrow("Car not found.");
      });
});