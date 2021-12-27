import { Request, Response } from "express";
import prismaClient from "../prisma";
import { UsuarioServices } from "../services/UsuarioServices";
import { hash } from 'bcryptjs';
import { MasterController } from "./MasterController";
class UsuarioControllers extends MasterController{
  service: any 
  constructor(){
    super(new UsuarioServices())
    this.service = new UsuarioServices()
  }
  
  create = async (request: Request, response: Response): Promise<any> => {
    const query = await prismaClient.usuario.findFirst({
      where:{
        email:request.body.email
      }
    })
    if(query) return response.status(200).json({created:false, message:"Email já cadastrado"})
    request.body.senha = await hash(request.body.senha, 10);
    const result = await this.service.create(request.body);
    if (!result) return response.status(500).json(result);
    return response.status(200).json(result);
  }


}

export { UsuarioControllers };
