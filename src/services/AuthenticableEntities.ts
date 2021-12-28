import createNewToken from '../utils/token';
import prismaClient from '../prisma'
import createError from 'http-errors';
import { compareSync } from 'bcryptjs';





class AuthenticableEntities{
    async login(data:any){
        try {
            const { email, senha } = data;
        const user = await prismaClient.usuario.findFirst({
            where:{
                email
            }
        })
        if (!user) {
            return;
        }
        const checkPassword = compareSync(senha, user.senha)
        if (!checkPassword) return;
        const token = await createNewToken({
            userID: user.id,
          })
        const retorno = { auth: true, token: token, user: user };
        return retorno;
        } catch (error) {
            const responseError = { deleted: false, message: 'Não foi possível logar', token: null, user:null}
            return responseError
        }
    }
}
       

export { AuthenticableEntities }