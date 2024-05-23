import { prisma } from "../../database/prisma";
import supertest from "supertest";
import { app } from "../../app";

describe("Car retrieve integration tests", () => {
  const request = supertest(app);
  const endpoint = "/cars";

  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to retrieve a car", async () => {
    const validPayload = {
        name: "Logan",
        description: "Full",
        brand: "Reanult",
        year: 2021,
        km: 20000,
    };

    const car = await request.post(endpoint).send(validPayload);

    const endpoint2 = `/cars/${car.body.id}`;
    
    const response = await request.get(endpoint2);

    const expectedResponseBody = {
        id: expect.any(String),
        name: "Logan",
        description: "Full",
        brand: "Reanult",
        year: 2021,
        km: 20000,
    };

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponseBody);
  });
});