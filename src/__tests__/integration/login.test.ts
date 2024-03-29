const request = require('supertest')
const { app } = require('../../app')
import prismaClient from '../../prisma/index'

describe('Login', () => {
    it('Shoud login', async () => {
        const mock_data = {
            name: "Teste Jest",
            email: "teste@jestlab2.com",
            senha: "12345",
            tipo: "gerente",
            cpf: "08128213315145105",
            telefone: 739880100
        }
        const user = await request(app)
        .post('/usuario')
        .send(mock_data)
        const login = await request(app)
            .post('/login')
            .send({
                email: mock_data.email,
                senha: mock_data.senha
            })
        const deleted = await prismaClient.usuario.delete({
            where:{
                id: login.body.user.id
            }
        })
        expect(login.status).toBe(200)
    })
})