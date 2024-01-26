<h1 align="center">
    <br>
    Criando API REST com Node.js
</h1>

<p align="center">
  <a href="https://fastify.io">
    <img alt="Fastify version" src="https://img.shields.io/badge/fastify-v4.25.2-43853D?style=flat&logo=fastify&logoColor=white&labelColor=20232A&color=5a5a5a">
  </a>

  <a href="https://knexjs.org">
    <img alt="Knex version" src="https://img.shields.io/badge/knex-v3.1.0-43853D?style=flat&logo=knex.js&logoColor=white&labelColor=e16426&color=5a5a5a">
  </a>

  <a href="https://nodejs.org">
    <img alt="Node.js version" src="https://img.shields.io/badge/node.js-v20.11.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://www.sqlite.org/index.html">
    <img alt="SQLite version" src="https://img.shields.io/badge/sqlite-v5.1.7-43853D?style=flat&logo=sqlite&logoColor=white&labelColor=007acc&color=5a5a5a">
  </a>

  <a href="https://www.typescriptlang.org">
    <img alt="TypeScript version" src="https://img.shields.io/badge/typescript-v5.3.3-43853D?style=flat&logo=typescript&logoColor=white&labelColor=007acc&color=5a5a5a">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gbdsantos/ignite.svg">

  <a href="https://github.com/gbdsantos/ignite/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gbdsantos/ignite.svg">
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
# Executar aplicação
npm run dev
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
- [ ] Deve ser possível identificarmos o usuário entre as requisições
- [ ] O usuário só pode visualizar transações o qual ele criou

<br>

**Requisitos Não Funcionais (RNF)**

<br>

## Tecnologias utilizadas <a name = "technologies"></a>

- [Fastify](https://fastify.io "Fastify - Framework web rápido e de baixo custo, para Node.js") - Framework web rápido e de baixo custo, para Node.js
- [Knex.js](https://knexjs.org "Knex.js - SQL query builder para JavaScript") - SQL query builder para JavaScript
- [Node.js](https://nodejs.org "Node.js") - Ambiente/plataforma em tempo de execução para JavaScript
- [SQLite](https://www.sqlite.org/index.html "SQLite") - Banco de dados local
- [TypeScript](https://www.typescriptlang.org "TypeScript") - Linguagem de programação e *superset* para JavaScript
- [Zod](https://zod.dev "Zod") - Validação de estruturas de dados e tipagens *TypeScript-first*

---

Feito com ❤️ por **Guilherme Bezerra** 👋 [Get in touch!](https://www.linkedin.com/in/gbdsantos)
