import { Request, Response } from "express";
import { carService } from "../services";

export class CarController {
    private service = new carService();

    public list = async (req: Request, res: Response): Promise<Response> => {        
        const tasks = await this.service.list();
        return res.status(200).json(tasks);
    };

    public retrieve = async (req: Request, res: Response): Promise<Response> => {
        const carId = String(req.params.id);
        const car = await this.service.retrieve(carId);
        return res.status(200).json(car);
    };

    public create = async (req: Request, res: Response): Promise<Response> => {
        const car = await this.service.create(req.body);
        return res.status(201).json(car);
    };
    
    public update = async (req: Request, res: Response): Promise<Response> => {
        const carId = String(req.params.id);
        const updatedCar = await this.service.update(carId, req.body);
        return res.status(200).json(updatedCar);
    };

    public delete = async (req: Request, res: Response): Promise<Response> => {
        const car = await this.service.delete(String(req.params.id));
        return res.status(204).json(car);
    };

}

export const carController = new CarController();