<h1 align="center">
    <br>
    Nest with Node.js
</h1>

<p align="center">
  <a href="https://nestjs.com">
    <img alt="NestJS logo image" src="https://img.shields.io/badge/nestjs-v10.0.0-20232A?style=flat&logo=nestjs&logoColor=white">
  </a>

  <a href="https://nodejs.org">
    <img alt="Node.js logo image" src="https://img.shields.io/badge/node.js-v20.16.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://redis.io" target="_blank">
    <img alt="Redis logo" src="https://img.shields.io/badge/Redis-dc382c?style=flat&logo=redis&logoColor=white">
  </a>

  <a href="https://www.typescriptlang.org">
    <img alt="TypeScript logo image" src="https://img.shields.io/badge/typescript-007acc?style=flat&logo=typescript&logoColor=white">
  </a>

  <a href="https://vitest.dev" alt="Vitest - Testing framework that use esbuild">
    <img alt="Vitest logo image" src="https://img.shields.io/badge/Vitest-FFA116?style=flat&logo=vitest&logoColor=white"  />
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
  <a href="https://github.com/gbdsantos/ignite/blob/master/nodejs/05-nest-clean/README.pt-BR.md" hreflang="pt-br" alt="pt-br">🇧🇷 portuguese
  </a>
</div>

<br>

This application developed as part of Project 05 of the "Level 04 DDD and First Framework > DDD in Node.js > NestJS" module of Node.js Ignite Bootcamp at Rocketseat.
Upload service using Cloudflare R2.

## 🚀 Getting Start <a name = "start"></a>

```bash
# Install dependencies
npm install --no-workspaces

# Create a new Docker environment
docker compose up -d

# Run migrations
npx prisma migrate dev

# Run project
npm run start:dev

# Verify TypeScript code integrity (type checking) without compile the code (OPTIONAL)
npx tsc --noEmit
```

## Commands executed <a name = "commands"></a>

```bash
# Create a new project called as 05-nest-clean
nest new 05-nest-clean

# Add ESLint
npm i eslint @rocketseat/eslint-config -D

# Add Prisma and Prisma Client
npm i prisma -D && npm i @prisma/client

# Initialize Prisma
npx prisma init

# Add Bcryptjs
npm i bcryptjs && npm i @types/bcryptjs -D

# Add Zod
npm i zod

# Add zod-validation-error
npm i zod-validation-error

# Add @nestjs/config
npm i @nestjs/config

# Add Passport and JWT for NestJS
npm i @nestjs/passport @nestjs/jwt

# Generate RS256 private key (Ubuntu)
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048

# Generate RS256 public key from the generated private key (Ubuntu)
openssl rsa -pubout -in private_key.pem -out public_key.pem

# Convert keys file content to base64
base64 private_key.pem > private_key_base64.txt
base64 public_key.pem > public_key_base64.txt

# Add passport-jwt
npm i passport-jwt && npm i @types/passport-jwt -D

# Setting Vitest in NestJS
npm i vitest unplugin-swc @swc/core @vitest/coverage-v8 -D && npm i vite-tsconfig-paths -D

# Add DotEnv
npm i dotenv -D

# Add Supertest
npm i supertest @types/supertest -D

# Add Faker
npm i @faker-js/faker -D

# Add Dayjs
npm i dayjs

# Add Multer
npm i @types/multer -D

# Add AWS SDK (S3)
npm i @aws-sdk/client-s3

# Add Redis
npm i ioredis
```

<br>

## Technologies used <a name="technologies"></a>

- [Cloudflare R2](https://www.cloudflare.com "Cloudflare R2 - S3-compatible object storage with $0 egress fees")
- [Nest.js](https://nestjs.com "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.") - A progressive Node.js framework for building efficient, reliable and scalable server-side applications
- [Node.js](https://nodejs.org "Node.js") - JavaScript runtime environment / plataform
- [Redis](https://redis.io "Redis - The open-source, in-memory data store used by millions of developers as a cache, vector database, document database, streaming engine, and message broker") - The open-source, in-memory data store used by millions of developers as a cache, vector database, document database, streaming engine, and message broker
- [TypeScript](https://www.typescriptlang.org "TypeScript") - Programming language and superset for JavaScript
- [Vitest](https://vitest.dev "Vitest - Testing framework that use esbuild") - Testing framework that use esbuild

---

Made with ♥ by **Guilherme Bezerra** 👋 [Get in touch!](https://www.linkedin.com/in/gbdsantos)
