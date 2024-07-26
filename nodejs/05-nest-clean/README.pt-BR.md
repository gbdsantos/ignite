<h1 align="center">
    <br>
    NestJS com Node.js
</h1>

<p align="center">
  <a href="https://nestjs.com">
    <img alt="imagem do logotipo  NestJS" src="https://img.shields.io/badge/nestjs-v10.0.0-20232A?style=flat&logo=nestjs&logoColor=white">
  </a>

  <a href="https://nodejs.org">
    <img alt="imagem do logotipo Nodejs" src="https://img.shields.io/badge/node.js-v20.16.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://www.typescriptlang.org">
    <img alt="imagem do logotipo TypeScript" src="https://img.shields.io/badge/typescript-007acc?style=flat&logo=typescript&logoColor=white">
  </a>

  <a href="https://vitest.dev" alt="Vitest - Testing framework that use esbuild">
    <img alt="imagem do logotipo Vitest" src="https://img.shields.io/badge/Vitest-FFA116?style=flat&logo=vitest&logoColor=white"  />
  </a>
</p>

<p align="center">
    <a href="#start" alt="Iniciando">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#commands" alt="Comandos executados">Comandos Executados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#business" alt="Requisitos de negócio">Requisitos de Negócio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#technologies" alt="Tecnologias utilizadas">Tecnologias Utilizadas</a>
</p>

<div align="center">
  <h4 align="center">leia no idioma</h4>
  <a href="https://github.com/gbdsantos/ignite/tree/master/nodejs/05-nest-clean" hreflang="en-us" alt="en-us">🇺🇸 inglês
  </a>
</div>

<br>

Esta aplicação foi desenvolvida como parte do Projeto 05 do módulo "Nível 04 DDD e Primeiro Framework > DDD no Node.js > NestJS" do Bootcamp Ignite Node.js na Rocketseat.

## 🚀 Iniciando <a name = "start"></a>

```bash
# Instalar dependências
npm install --no-workspaces

# Criar um novo ambiente Docker
docker compose up -d

# Executar migrations
npx prisma migrate dev

# Executar projeto
npm run start:dev
```

<br>

## Comandos executados <a name = "commands"></a>

```bash
# Criar um novo projeto chamado 05-nest-clean
nest new 05-nest-clean

# Adicionar ESLint
npm i eslint @rocketseat/eslint-config -D

# Adicionar Prisma e Prisma Client
npm i prisma -D

# Inicializar o Prisma
npx prisma init

# Adicionar Bcryptjs
npm i bcryptjs && npm i @types/bcryptjs -D

# Adicionar Zod
npm i zod

# Adicionar zod-validation-error
npm i zod-validation-error

# Adicionar @nestjs/config
npm i @nestjs/config

# Adicionar Passport and JWT for NestJS
npm i @nestjs/passport @nestjs/jwt

# Gerar chave RS256 privada (Ubuntu)
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048

# Gerar chave RS256 pública à partir da chave privada gerada (Ubuntu)
openssl rsa -pubout -in private_key.pem -out public_key.pem

# Converter conteúdo do arquivo das chaves para base64
base64 private_key.pem > private_key_base64.txt
base64 public_key.pem > public_key_base64.txt

# Adicionar passport-jwt
npm i passport-jwt && npm i @types/passport-jwt -D

# Configurando Vitest no NestJS
npm i vitest unplugin-swc @swc/core @vitest/coverage-v8 -D && npm i vite-tsconfig-paths -D

# Adicionar DotEnv
npm i dotenv -D

# Adicionar Supertest
npm i supertest @types/supertest -D
```

<br>

## Tecnologias utilizadas <a name = "technologies"></a>

- [Nest.js](https://nestjs.com "Um framework Node.js progressivo para construir aplicativos do lado do servidor eficientes, confiáveis ​​e escaláveis.") - Um framework Node.js progressivo para construir aplicativos do lado do servidor eficientes, confiáveis ​​e escaláveis
- [Node.js](https://nodejs.org "Node.js") - Ambiente/plataforma em tempo de execução para JavaScript
- [TypeScript](https://www.typescriptlang.org "TypeScript") - Linguagem de programação e *superset* para JavaScript
- [Vitest](https://vitest.dev "Vitest - Framework de teste que usa esbuild") - Framework de teste que usa esbuild

---

Feito com ❤️ por **Guilherme Bezerra** 👋 [Entrar em contato!](https://www.linkedin.com/in/gbdsantos)

