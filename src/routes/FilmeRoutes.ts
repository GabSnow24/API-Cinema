import { Router } from 'express'
import { FilmeControllers } from '../controllers/FilmeControllers'
import { AnalistaMiddleware } from '../middleware/AnalistaMiddleware'
import { CadastradorMiddleware } from '../middleware/CadastradorMiddleware'


const FilmeRoutes = Router()

FilmeRoutes.get('/filme', new AnalistaMiddleware().ensureAuthenticated, new FilmeControllers().readAll)
FilmeRoutes.post('/filme', new CadastradorMiddleware().ensureAuthenticated, new FilmeControllers().create)
FilmeRoutes.delete('/toremove', new AnalistaMiddleware().ensureAuthenticated, new FilmeControllers().toRemove)
FilmeRoutes.get('/toremove', new AnalistaMiddleware().ensureAuthenticated, new FilmeControllers().getToRemove)
FilmeRoutes.get('/filme/:id', new AnalistaMiddleware().ensureAuthenticated, new FilmeControllers().readOne)
FilmeRoutes.delete('/filme/:id', new AnalistaMiddleware().ensureAuthenticated, new FilmeControllers().delete)
FilmeRoutes.put('/filme/:id', new AnalistaMiddleware().ensureAuthenticated, new FilmeControllers().update)












export { FilmeRoutes }