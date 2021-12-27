import prismaClient from "../prisma";
import bcrypt from 'bcryptjs';

class UsuarioServices {
  async create(data: any) {
    
    const user = await prismaClient.usuario.create({
      data: data,
    });
    return user;
  }

  async readOne(ID: any) {
    const data = await prismaClient.usuario.findUnique({
      where: {
        id: ID,
      },
    });
    return data;
  }

  async readAll() {
    const data = await prismaClient.usuario.findMany({
      orderBy: {
        created_at: "desc"
      }
    });
    return data;
  }

  async update(ID: any, data: any) {
    const user = await prismaClient.filme.update({
      data: data,
      where: {
        id: ID
      },
    });
    return user;
  }

  async delete(ID: any) {
    const data = await prismaClient.usuario.delete({
      where: {
        id: ID
      },
    });
    return data;
  }

}

export { UsuarioServices };
