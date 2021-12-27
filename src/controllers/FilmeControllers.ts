import { FilmeServices } from "../services/FilmeServices";
import { MasterController } from "./MasterController";
import { Request, Response } from "express";

class FilmeControllers extends MasterController {
  service: any 
  constructor(){
    super(new FilmeServices())
    this.service = new FilmeServices() 
  }
  toRemove = async (request: Request, response: Response): Promise<any> => {
    const result = await this.service.toRemove();
    if(!result.total) return response.status(200).json(result)
    return response.status(200).json(result);
  }

  getToRemove = async (request: Request, response: Response): Promise<any> => {
    const result = await this.service.getToRemove();
    if(!result.to_remove) return response.status(200).json(result)
    return response.status(200).json(result);
  }

}

export { FilmeControllers };
