import express from 'express'
import http from 'http'
import cors from 'cors'
import { UsuarioRoutes } from "./routes/UsuarioRoutes"
import { FilmeRoutes } from "./routes/FilmeRoutes"
import { AuthenticableRoutes } from "./routes/AuthenticableRoutes"
import ToRemoveJob from './cron/ToRemoveJob'


const app = express()
app.use(cors())

const serverHttp = http.createServer(app)

ToRemoveJob();
app.use(express.json())

app.use(UsuarioRoutes)
app.use(FilmeRoutes)
app.use(AuthenticableRoutes)



export {  serverHttp, app }