import { UsuarioServices } from "../services/UsuarioServices";

export default async function getUserType(id:any){
    const service = new UsuarioServices()
    const user = await service.readOne(id);
    if(!user) return;
    return user.tipo;
}