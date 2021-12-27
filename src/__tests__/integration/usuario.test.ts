const request = require('supertest')
const { app } = require('../../app')
import prismaClient from '../../prisma/index'

describe('Usuario', () => {
    it('Shoud create', async () => {
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
        const deleted = await prismaClient.usuario.delete({
            where:{
                id: user.body.id
            }
        })
        expect(user.status).toBe(200)
    })
})