import prismaClient from "../prisma";
import bcrypt from 'bcryptjs';

class UsuarioServices {
  async create(data: any) {
    try {
      const user = await prismaClient.usuario.create({
        data: data,
      });
      return user;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível criar o usuário'}
      return responseError
    }
  }

  async readOne(ID: any) {
    try {
      const data = await prismaClient.usuario.findUnique({
      where: {
        id: ID,
      },
    });
    return data;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível ler os dados', tipo:'Nao foi possível receber achar o usuário'}
      return responseError
    }
  }

  async readAll(datas:any) {
    try {
      const data = await prismaClient.usuario.findMany({
        orderBy: {
          created_at: "desc"
        }
      });
      return data;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível ler os dados'}
      return responseError
    }
  }

  async update(ID: any, data: any) {
    try {
      const user = await prismaClient.filme.update({
        data: data,
        where: {
          id: ID
        },
      });
      return user;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível atualizar'}
      return responseError
    }
  }

  async delete(ID: any) {
    try {
      const data = await prismaClient.usuario.delete({
        where: {
          id: ID
        },
      });
      return data;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível deletar'}
      return responseError
    }
  }

}

export { UsuarioServices };
