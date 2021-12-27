import prismaClient from "../prisma";



class FilmeServices {

  async create(data: any) {
    const filme = await prismaClient.filme.create({
      data: data,
    });
    return filme;
  }

  async readOne(ID: any) {
    const data = await prismaClient.filme.findUnique({
      where: {
        id: ID,
      },
    });
    return data;
  }

  async readAll(query?: any) {
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
  }

  async update(ID: any, data: any) {
    const filme = await prismaClient.filme.update({
      data: data,
      where: {
        id: ID
      },
    });
    return filme;
  }

  async delete(ID: any) {
    const data = await prismaClient.filme.delete({
      where: {
        id: ID
      },
    });
    return data;
  }

  

  async toRemove(){
    const data = await prismaClient.filme.findMany({
      where:{
        to_remove: true
      },
      select:{
        id:true 
      }
    })
    if(!data){
      const response = {deleted: true, message:'Sem filmes para remover'}
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
  }

}

export { FilmeServices };

