import { prisma } from "../../database/prisma";
import supertest from "supertest";
import { app } from "../../app";

describe("Car delete integration tests", () => {
  const request = supertest(app);
  const endpoint = "/cars";

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

    const carToDelete = await request.post(endpoint).send(car);
    
    const endpoint2 = `/cars/${carToDelete.body.id}`;

    const response = await request.delete(endpoint2);

    expect(response.status).toBe(204);
    expect(response.body).toEqual([]);
  });
});