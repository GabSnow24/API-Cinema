import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/token';
import getUserType from '../utils/getUserType';



class MasterMiddleware{
    public type: any
    constructor(type: any){
        this.type = type;
    }
    ensureAuthenticated = async (request: Request, response: Response, next: NextFunction): Promise<any> => {
        if(!request.headers.authorization)
                return response.status(403).send({auth:false, message: 'Token não provido'})
        const token:any = request.headers.authorization.split(' ')[1];
        try {
            const{ userID } = verifyToken(token);
            const user_type = await getUserType(userID);
            const type = user_type || false;
            if(!type) return response.status(404).send({auth:false, message:'Usuário não encontrado'})
            if(type === 'gerente') return next()
            if(type != this.type)
                return response.status(403).send({auth:false, message: 'Usuário não autorizado'})
            return next()
        }catch(err){
            console.log(err)
            return response.status(401).json({auth: false, message:"Token expirado"})
        }
    
    
    }

}

export { MasterMiddleware }