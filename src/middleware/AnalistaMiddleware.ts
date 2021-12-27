import { MasterMiddleware } from "./MasterMiddleware";

class AnalistaMiddleware extends MasterMiddleware{
    constructor(){
        super('analista')
    }
}

export { AnalistaMiddleware }