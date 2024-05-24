import { prisma } from "../../database/prisma";
import supertest from "supertest";
import { app } from "../../app";

describe("Car delete integration tests", () => {
  const request = supertest(app);

  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to delete a car", async () => {
    const car = {
        name: "Logan",
        description: "Full",
        brand: "Reanult",
        year: 2021,
        km: 20000,
    };

    const carToDelete = await prisma.car.create({data: car});
    
    const endpoint = `/cars/${carToDelete?.id}`;
    
    const response1 = await request.delete(endpoint);

    const response2 = await prisma.car.findMany();

    expect(response1.status).toBe(204);
    expect(response2).toEqual([]);
  });
});