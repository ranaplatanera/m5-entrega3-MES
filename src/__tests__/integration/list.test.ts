import { prisma } from "../../database/prisma";
import supertest from "supertest";
import { app } from "../../app";

describe("Car list integration tests", () => {
  const request = supertest(app);
  const endpoint = "/cars";

  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to list all cars ", async () => {
    const validPayload = [
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

    const cars = await request.post(endpoint).send(validPayload);
    
    const response = await request.get(endpoint);

    const expectedResponseBody = [
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

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponseBody);
  });
});