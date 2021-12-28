import prismaClient from "../prisma";



class FilmeServices {

  async create(data: any) {
    try {
      const filme = await prismaClient.filme.create({
        data: data,
      });
      return filme;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível criar o filme'}
      return responseError
    }
  }

  async readOne(ID: any) {
    try {
      const data = await prismaClient.filme.findUnique({
        where: {
          id: ID,
        },
      });
      return data;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível ler os dados'}
      return responseError
    }
  }

  async readAll(query?: any) {
    try {
      let { auth = 'true'} = query; 
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const startIndex = (page-1)*limit 
    const totalCount = await prismaClient.filme.count()
    const totalPages = Math.ceil(totalCount/limit)
    auth === 'true' ? auth = true : auth = false;
    const data = await prismaClient.filme.findMany({
      take: limit,
      skip:startIndex,
      orderBy:{
        genero:'asc'
      },
      where:{
        autorizado: auth 
      },
    });
    const response = {
      data,
      limit,
      page, 
      total: totalCount,
      totalPages

    }
    return response;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível ler os dados'}
      return responseError
    }
  }

  async update(ID: any, data: any) {
    try {
      const filme = await prismaClient.filme.update({
        data: data,
        where: {
          id: ID
        },
      });
      return filme;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível atualizar o usuário'}
      return responseError
    }
  }

  async delete(ID: any) {
    try {
      const data = await prismaClient.filme.delete({
        where: {
          id: ID
        },
      });
      return data;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível deletar o usuário'}
      return responseError
    }
  }

  async getToRemove(){
    try {
      const data = await prismaClient.filme.findMany({
        where:{
          to_remove: true
        },
      })
      if(data.length < 1){
        const response = {to_remove: false, message:'Sem filmes para remover'}
        return response;
      }
  
     return data;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível retornar filmes a serem removidos'}
      return responseError
    }
  }

  

  async toRemove(){
    try {
      const data = await prismaClient.filme.findMany({
        where:{
          to_remove: true
        },
        select:{
          id:true 
        }
      })
      if(data.length < 1){
        const response = {to_remove: false ,message:'Sem filmes para remover'}
        return response;
      }
      const id = data.map((obj) => {
        return obj.id 
      })
     const deleted = await prismaClient.filme.deleteMany({
       where:{
         id:{
           in: id
         }
       }
     })
     const response = {deleted: true, total:deleted}
     return response;
    } catch (error) {
      const responseError = { deleted: false, message: 'Não foi possível remover os filmes'}
      return responseError
    }
  }

}

export { FilmeServices };

