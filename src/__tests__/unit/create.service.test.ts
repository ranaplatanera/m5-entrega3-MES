import { prisma } from "../../database/prisma";
import { carService } from "../../services";

describe("Car service create unit tests", () => {
    
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });
    
    test("Should be able to create a Car", async () => {
        const service = new carService();

        const testCar = await service.create({
            name: "Logan",
            description: "Full",
            brand: "Reanult",
            year: 2021,
            km: 20000,
        });

        const expectedCar = {
            id: expect.any(String),
            name: "Logan",
            description: "Full",
            brand: "Reanult",
            year: 2021,
            km: 20000,
        }  

        expect(testCar).toEqual(expectedCar);
    });
});