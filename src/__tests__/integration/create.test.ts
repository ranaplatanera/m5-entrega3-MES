import { prisma } from "../../database/prisma";
import supertest from "supertest";
import { app } from "../../app";

describe("Car create integration tests", () => {
  const request = supertest(app);
  const endpoint = "/cars";

  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to create a car", async () => {
    const validPayload = {
        name: "Logan",
        description: "Full",
        brand: "Reanult",
        year: 2021,
        km: 20000,
    };

    const response = await request.post(endpoint).send(validPayload);

    const expectedResponseBody = {
        id: expect.any(String),
        name: "Logan",
        description: "Full",
        brand: "Reanult",
        year: 2021,
        km: 20000,
    };

    expect(response.status).toBe(201);
    expect(response.body).toEqual(expectedResponseBody);
  });
});