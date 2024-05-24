import { prisma } from "../../database/prisma";
import { carService } from "../../services";

describe("Car service update unit tests", () => {
    
    beforeAll(async () => {
        await prisma.car.deleteMany();
    });
    
    const service = new carService();
    
    const toUpdatePayload = {
        description: "Usado",
        km: 100000,
    };

    test("Should be able to update a car by id", async () => {
        const testCar = await service.create({
            name: "Logan",
            description: "Full",
            brand: "Reanult",
            year: 2021,
            km: 20000,
        });

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

        const noUpdate = service.update(nonExistingId, toUpdatePayload);
    
        expect(noUpdate).rejects.toThrow("Car not found.");
    });
});