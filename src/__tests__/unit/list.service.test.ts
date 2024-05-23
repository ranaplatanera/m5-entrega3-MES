import { prisma } from "../../database/prisma";
import { carService } from "../../services";

describe("Car service list unit tests", () => {
    
    beforeAll(async () => {
        await prisma.car.deleteMany();
    });
    
    const service = new carService();

    test("Should be able to list all cars", async () => {

        const testCars = [
            {
                name: "Logan",
                description: "Full",
                brand: "Reanult",
                year: 2021,
                km: 20000,
            },
            {
                name: "Gol",
                description: "Full",
                brand: "Volkswagen",
                year: 2020,
                km: 40000,
            },
            {
                name: "Uno Way",
                description: "Básico",
                brand: "Fiat",
                year: 2022,
                km: 10000,
            },
          ];
      
          await prisma.car.createMany({ data: testCars });
      
          const receivedValue = await service.list();
          const expectedValue = [
            {
                id: expect.any(String),
                name: "Logan",
                description: "Full",
                brand: "Reanult",
                year: 2021,
                km: 20000,
            },
            {
                id: expect.any(String),
                name: "Gol",
                description: "Full",
                brand: "Volkswagen",
                year: 2020,
                km: 40000,
            },
            {
                id: expect.any(String),
                name: "Uno Way",
                description: "Básico",
                brand: "Fiat",
                year: 2022,
                km: 10000,
            },
          ];
          expect(receivedValue).toEqual(expectedValue);
    });
});