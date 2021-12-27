import { Request, Response } from "express";

class MasterController{
  service: any 
  constructor(service: any){
    this.service = service
  }

  create = async (request: Request, response: Response): Promise<any> => {
    const data = request.body;
    const result = await this.service.create(data);
    return response.status(200).json(result);
  }

  readOne = async (request: Request, response: Response): Promise<any> => {
    const { id } = request.params;
    const result = await this.service.readOne(id);
    return response.status(200).json(result);
  }

  readAll = async (request: Request, response: Response): Promise<any> => {
    const data = request.query;
    const result = await this.service.readAll(data);
    return response.status(200).json(result);
  }

  update = async (request: Request, response: Response): Promise<any> => {
    const { id } = request.params;
    const data = request.body;
    const result = await this.service.update(id, data);
    return response.status(200).json(result);
  }

  delete = async (request: Request, response: Response): Promise<any> => {
    const { id } = request.params;
    const result = await this.service.delete(id);
    return response.status(200).json(result);
  }

}

export { MasterController }