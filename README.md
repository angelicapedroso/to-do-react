## To-Do App

Esta é uma aplicação de to-do list, que tem como objetivo a possibilidade de o usuário criar, listar, editar e excluir uma tarefa. 

Meu objetivo ao iniciar este projeto foi treinar minhas habilidades com front-end e back-end, criando um projeto full-stack do zero, realizando um CRUD e fazendo a integração entre as duas partes.


## Tecnologias utilizadas

### Front-end
* React.js
* Vite
* TypeScript
* Styled Components 

### Back-end
* Node.js
* Express.js
* TypeScript
* Prisma
* Postgres

## Como executar

1. Clone o repositório

2. Entre na pasta **frontend** e execute o comando ` npm install && npm run dev `

3. Entre na pasta **backend** e execute o comando ` npm install && npm start `

4. Após o passo 3, execute o comando ` npx prisma init ` na pasta backend para iniciar o prisma. Isso irá gerar o arquivo `.env` onde será passada a variável de ambiente através para conexão com o banco de dados.

``` js
// A variável tem o seguinte formato:
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"

// A variável virá preenchida da seguinte forma:
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```
**Deverão ser preenchidos os seguintes campos:**

**USER**: O nome do usuário do banco de dados

**PASSWORD**: A senha para o usuário do banco de dados

**HOST**: O nome do seu host (no ambiente local, é localhost)

**PORT**: A porta em que o servidor de banco de dados está sendo executado

**DATABASE**: O nome do banco de dados
