import {Request, Response} from "express";
import { verifyToken } from "../utils/token";

export default class AuthControllers{
    public verifyToken = async (req: Request, res: Response) => {
        if(!req.headers.authorization)
            return res.status(403).send({auth:false, message: 'Token não provido'})
        const token:any = req.headers.authorization.split(' ')[1];
        return res.status(200).send({auth:true})
    }
    public getTokenData = async (req:Request, res: Response) => {
        if(!req.headers.authorization)
            return res.status(403).send({auth:false, message: 'Token não provido'})
        const token:any = req.headers.authorization.split(' ')[1];
        const token_data = verifyToken(token);
        return res.status(200).send({auth:true, token_data})
    }
}