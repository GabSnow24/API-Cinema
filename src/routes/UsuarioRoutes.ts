import { Router } from 'express'
import { UsuarioControllers } from '../controllers/UsuarioControllers'
import { GerenteMiddleware } from '../middleware/GerenteMiddleware'


const UsuarioRoutes = Router()

UsuarioRoutes.get('/usuario', new GerenteMiddleware().ensureAuthenticated, new UsuarioControllers().readAll)
UsuarioRoutes.post('/usuario', new UsuarioControllers().create)
UsuarioRoutes.get('/usuario/:id', new GerenteMiddleware().ensureAuthenticated, new UsuarioControllers().readOne)
UsuarioRoutes.delete('/usuario/:id', new GerenteMiddleware().ensureAuthenticated, new UsuarioControllers().delete)
UsuarioRoutes.put('/usuario/:id', new GerenteMiddleware().ensureAuthenticated, new UsuarioControllers().update)








export { UsuarioRoutes }