import { MasterMiddleware } from "./MasterMiddleware";

class GerenteMiddleware extends MasterMiddleware{
    constructor(){
        super('gerente')
    }
}

export { GerenteMiddleware }