<h1 align="center"> Projeto Backend-II </h1>
<h1>Descrição: </h1>
<h2>Projeto backend</h2>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

### 🎲 Rodando o Back End (servidor)

```bash
# Instale as dependências
$ npm i -g @nestjs/cli
$ npm i class-validator class-transformer
$ npm i @nestjs/swagger swagger-ui-express
$ npm install prisma --save-dev
$ npx prisma generate
$ npm i @nestjs/mapped-types
$ npm i bcrypt
$ npm i -D @types/bcrypt
$ npm i passport passport-jwt passport-local @nestjs/passport @nestjs/jwt
$ npm i -D @types/passport-jwt @types/passport-local

# Clone este repositório
$ git clone <https://github.com/xunayzin/backend-II>

# Acesse a pasta do projeto no terminal/cmd
$ cd backend-II

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
