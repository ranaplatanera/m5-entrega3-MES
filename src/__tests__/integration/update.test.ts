import { prisma } from "../../database/prisma";
import supertest from "supertest";
import { app } from "../../app";

describe("Car update integration tests", () => {
  const request = supertest(app);
  const endpoint = "/cars";

  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to update a car", async () => {
    const validPayload = {
        name: "Logan",
        description: "Full",
        brand: "Reanult",
        year: 2021,
        km: 20000,
    };

    const car = await request.post(endpoint).send(validPayload);

    const endpoint2 = `/cars/${car.body.id}`;

    const toUpdatePayload = {
      description: "Usado",
      km: 100000,
    };
    
    const response = await request.patch(endpoint2).send(toUpdatePayload);

    const expectedResponseBody = {
        id: expect.any(String),
        name: "Logan",
        description: toUpdatePayload.description,
        brand: "Reanult",
        year: 2021,
        km: toUpdatePayload.km,
    };

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponseBody);
  });
});