<h1 align="center">
    <br>
    Creating REST API with Node.js
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
    <a href="#start" alt="Getting Started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#commands" alt="Commands executed">Commands Executed</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#business" alt="Business requirements">Business Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#technologies" alt="Technologies used">Technologies Used</a>
</p>


<div align="center">
  <h4 align="center">read in the language</h4>
  <a href="https://github.com/gbdsantos/ignite/tree/master/nodejs/02-creating-rest-api-with-nodejs/README.pt-br.md" hreflang="pt-br" alt="pt-br">🇧🇷 portuguese
  </a>
</div>

## Getting Start <a name = "start"></a>

```bash
# Run application
npm run dev
```

## Commands executed <a name = "commands"></a>

```bash
# Starting project
 npm init -y

# Install TypeScript
npm i -D typescript

# Inicialize TypeScript
npx tsc --init

# Install Fastify
npm install fastify

# Add Node.js types
npm install @types/node -D

# Install tsx
npm install tsx -D

# Install ESLint
npm install eslint @rocketseat/eslint-config -D

# Install Knex.js and SQLite native driver
npm install knex sqlite3

# Create first migration with Knex
npm run knex -- migrate:make create-documents

# Run migrations
npm run knex -- migrate:latest

# Undo last migration
npm run knex -- migrate:rollback

# Install dotenv
npm install dotenv

# Install Zod
npm install zod

# Install @fastify/cookies
npm install @fastify/cookie
```

<br>

## Business requirements <a name="business"></a>

**Functional Requirements (FR)**

- [x] The user should be able to create a new transaction
- [x] The user should be able to get a summary of their account
- [x] The user should be able to list all transactions that have occurred.
- [x] The user should be able to view a single transaction

<br>

**Business Requirements (BR)**

- [x] The transaction can be of the credit type, which will add to the total amount, or debit type, which will subtract
- [ ] It should be possible to identify the user between requests
- [ ] The user can only view transactions that they have created

<br>

**Non-Functional Requirements (NFR)**

<br>

## Technologies used <a name="technologies"></a>

- [Fastify](https://fastify.io "Fastify - Fast and low overhead web framework, for Node.js") - Fast and low overhead web framework, for Node.js
- [Knex.js](https://knexjs.org "Knex.js - SQL query builder for JavaScript") - SQL query builder for JavaScript
- [Node.js](https://nodejs.org "Node.js") - JavaScript runtime environment / plataform
- [SQLite](https://www.sqlite.org/index.html "SQLite") - Local database
- [TypeScript](https://www.typescriptlang.org "TypeScript") - Programming language and superset for JavaScript
- [Zod](https://zod.dev "Zod") - TypeScript-first schema validations

---

Made with ♥ by **Guilherme Bezerra** 👋 [Get in touch!](https://www.linkedin.com/in/gbdsantos)
