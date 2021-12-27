import { MasterMiddleware } from "./MasterMiddleware";

class CadastradorMiddleware extends MasterMiddleware{
    constructor(){
        super('cadastrador')
    }
}

export { CadastradorMiddleware }