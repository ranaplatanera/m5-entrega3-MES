import { z } from "zod";
import { carSchema, carCreateSchema, carUpdateSchema } from "../schemas";

type Car = z.infer<typeof carSchema>;
type CarCreate = z.infer<typeof carCreateSchema>;
type CarUpdate = z.infer<typeof carUpdateSchema>;

export { Car, CarCreate, CarUpdate };