# API-Cinema
API para gestão de filmes em cinema.

Documentação v1 da API - Swagger

https://app.swaggerhub.com/apis/GabSnow24/API-Cinema/1.0.0#/

Diagrama v1 da API 

https://drive.google.com/file/d/1pM5VFgxw5L9UEO829VmlRZVrWd-lDeDp/view?usp=sharing

Yarn Install

Setar .env com as variavéis 

Yarn Dev

Cria usuário
Post('/usuário')

Loga com usuário
Post('/login')

Copia token retornado e utiliza como Authorization Bearer nas devidas rotas onde os usuários tem permissão

Rota paginada de Filmes 
Get('/filme?auth=true ou false&page=algum número &limit=algum numero
