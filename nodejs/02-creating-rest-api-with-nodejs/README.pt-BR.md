<h1 align="center">
    <br>
    Criando API REST com Node.js
</h1>

<p align="center">
  <a href="https://fastify.io">
    <img alt="Fastify version" src="https://img.shields.io/badge/fastify-20232A?style=flat&logo=fastify&logoColor=white">
  </a>

  <a href="https://knexjs.org">
    <img alt="Knex version" src="https://img.shields.io/badge/knex-e16426?style=flat&logo=knex.js&logoColor=white">
  </a>

  <a href="https://nodejs.org">
    <img alt="Node.js version" src="https://img.shields.io/badge/node.js-v20.11.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://www.sqlite.org/index.html">
    <img alt="SQLite version" src="https://img.shields.io/badge/sqlite-007acc?style=flat&logo=sqlite&logoColor=white">
  </a>

  <a href="https://www.typescriptlang.org">
    <img alt="TypeScript version" src="https://img.shields.io/badge/typescript-007acc?style=flat&logo=typescript&logoColor=white">
  </a>

  <a href="https://vitest.dev" alt="Vitest - Testing framework that use esbuild">
    <img src="https://img.shields.io/badge/Vitest-FFA116?style=flat&logo=vitest&logoColor=white" alt="imagem do logotipo Vitest" />
  </a>

  <a href="https://zod.dev" alt="Zod - Validação de esquema TypeScript-first com inferência de tipo estático">
    <img src="https://img.shields.io/badge/Zod-274d82?style=flat&logo=zod&logoColor=white" alt="imagem do logotipo Zod" />
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gbdsantos/ignite.svg">

  <a href="https://github.com/gbdsantos/ignite/commits/master">
    <img alt="GitHub último commit" src="https://img.shields.io/github/last-commit/gbdsantos/ignite.svg">
  </a>
</p>

<p align="center">
    <a href="#start" alt="Iniciando">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#commands" alt="Commands executed">Comandos Executados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#business" alt="Business requirements">Requisitos de Negócio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#technologies" alt="Technologies used">Tecnologias Utilizadas</a>
</p>

<div align="center">
  <h4 align="center">leia no idioma</h4>
  <a href="https://github.com/gbdsantos/ignite/tree/master/nodejs/02-creating-rest-api-with-nodejs" hreflang="en-us" alt="en-us">🇺🇸 inglês
  </a>
</div>

## Iniciando <a name = "start"></a>

```bash
# Instalar as dependências
npm install

# Executar aplicação
npm run dev

# Executar testes
npm test

# Buildar aplicação
npm run build
```

## Comandos executados <a name = "commands"></a>

```bash
# Iniciando projeto
 npm init -y

# Instalar TypeScript
npm i -D typescript

# Inicializar TypeScript
npx tsc --init

# Instalar Fastify
npm install fastify

# Adicionar tipagam do Node.js
npm install @types/node -D

# Instalar tsx
npm install tsx -D

# Instalar ESLint
npm install eslint @rocketseat/eslint-config -D

# Instalar Knex.js e driver nativo do SQLite
npm install knex sqlite3

# Criar primeira migration com Knex
npm run knex -- migrate:make create-documents

# Executar migrations
npm run knex -- migrate:latest

# Desfazer última migration
npm run knex -- migrate:rollback

# Instalar dotenv
npm install dotenv

# Instalar Zod
npm install zod

# Instalar @fastify/cookies
npm install @fastify/cookie

# Instalar Vitest
npm install vitest -D

# Instalar supertest e @types/supertest
 npm install supertest @types/supertest -D

 # Instalar tsup
 npm install tsup -D
```

<br>

## Requisitos de negócio <a name = "business"></a>

**Requisitos funcionais (RF)**
- [x] O usuário deve poder criar uma nova transação
- [x] O usuário deve poder obter um resumo da sua conta
- [x] O usuário deve poder listar todas transações que já ocorreram
- [x] O usuário deve poder visualizar uma transação única

<br>

**Requisitos de negócio (RN)**

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá
- [x] Deve ser possível identificarmos o usuário entre as requisições
- [x] O usuário só pode visualizar transações o qual ele criou

<br>

**Requisitos Não Funcionais (RNF)**

<br>

## Tecnologias utilizadas <a name = "technologies"></a>

- [Fastify](https://fastify.io "Fastify - Framework web rápido e de baixo custo, para Node.js") - Framework web rápido e de baixo custo, para Node.js
- [Knex.js](https://knexjs.org "Knex.js - SQL query builder para JavaScript") - SQL query builder para JavaScript
- [Node.js](https://nodejs.org "Node.js") - Ambiente/plataforma em tempo de execução para JavaScript
- [SQLite](https://www.sqlite.org/index.html "SQLite") - Banco de dados local
- [tsup](https://tsup.egoist.dev "tsup - Compile sua aplicação/biblioteca TypeScript sem configurações, *powered by* esbuild") - Compile sua aplicação/biblioteca TypeScript sem configurações, *powered by* esbuild
- [TypeScript](https://www.typescriptlang.org "TypeScript") - Linguagem de programação e *superset* para JavaScript
- [Vitest](https://vitest.dev "Vitest - Framework de teste que usa esbuild") - Framework de teste que usa esbuild
- [Zod](https://zod.dev "Zod") - Validação de estruturas de dados e tipagens *TypeScript-first*

---

Feito com ❤️ por **Guilherme Bezerra** 👋 [Get in touch!](https://www.linkedin.com/in/gbdsantos)
