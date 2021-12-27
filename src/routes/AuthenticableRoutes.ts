import { Router } from 'express'
import AuthControllers from '../controllers/AuthController'
import { AuthenticableControllers } from '../controllers/AuthenticableControllers'
import { GerenteMiddleware } from '../middleware/GerenteMiddleware'

const AuthenticableRoutes = Router()


AuthenticableRoutes.post('/login', new AuthenticableControllers().login)
AuthenticableRoutes.get('/verify-token', new GerenteMiddleware().ensureAuthenticated, new AuthControllers().verifyToken)
AuthenticableRoutes.get('/token', new GerenteMiddleware().ensureAuthenticated, new AuthControllers().getTokenData)






export { AuthenticableRoutes }