import { z } from "zod";

const carSchema = z.object({
    id: z.string().max(36),
    name: z.string().max(200),
    description: z.string().optional(),
    brand: z.string(),
    year: z.number().positive(),
    km: z.number().positive()
  });

const carCreateSchema = carSchema.omit({ id: true });

const carUpdateSchema = carCreateSchema.partial({ name: true , description: true, brand: true, year: true, km: true });
  
export { carSchema, carCreateSchema, carUpdateSchema };
