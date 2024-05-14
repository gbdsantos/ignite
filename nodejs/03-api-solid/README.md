<h1 align="center">
    <br>
    API Node.js with SOLID
</h1>

<p align="center">
  <a href="https://fastify.io">
    <img alt="Fastify logo image" src="https://img.shields.io/badge/fastify-20232A?style=flat&logo=fastify&logoColor=white">
  </a>

  <a href="https://nodejs.org">
    <img alt="Node.js logo image" src="https://img.shields.io/badge/node.js-v20.11.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://www.prisma.io">
    <img alt="Prisma logo image" src="https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white" />
  </a>

  <a href="https://www.postgresql.org">
    <img alt="PosgreSQL logo image" src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-&logo=postgresql&logoColor=white"  />
  </a>

  <a href="https://www.typescriptlang.org">
    <img alt="TypeScript logo image" src="https://img.shields.io/badge/typescript-007acc?style=flat&logo=typescript&logoColor=white">
  </a>

  <a href="https://vitest.dev" alt="Vitest - Testing framework that use esbuild">
    <img alt="Vitest logo image" src="https://img.shields.io/badge/Vitest-FFA116?style=flat&logo=vitest&logoColor=white"  />
  </a>

  <a href="https://zod.dev" alt="Zod - TypeScript-first schema validation with static type inference">
    <img alt="Zod logo image" src="https://img.shields.io/badge/Zod-274d82?style=flat&logo=zod&logoColor=white" />
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
  <a href="https://github.com/gbdsantos/ignite/blob/master/nodejs/03-api-solid/README.pt-BR.md" hreflang="pt-br" alt="pt-br">🇧🇷 portuguese
  </a>
</div>

<br>

🍏 GymPass style app.
The GymPass style app is an application developed as part of Project 03 of the "Level 03 Implementing SOLID > API Node.js with SOLID" module of Node.js Ignite Bootcamp at Rocketseat.

## 🚀 Getting Start <a name = "start"></a>

```bash
# Install dependencies
npm install --no-workspaces

# Create a new Docker environment
docker compose up -d

# Run migrations
npx prisma migrate dev

# Run application
npm run dev

# Run test
npm test

# Build application
npm run build
```

**Functional Requirements (FR)**

- [x] It should be possible to register
- [x] It should be possible to authenticate
- [x] It should be possible to retrieve the profile of a logged-in user
- [x] It should be possible to retrieve the number of check-ins performed by the logged-in user
- [x] It should be possible for the user to retrieve their check-in history
- [x] It should be possible for the user to search for nearby gyms (up to 10km)
- [x] It should be possible for the user to search for gyms by name
- [x] It should be possible for the user to check in at a gym
- [x] It should be possible to validate a user's check-in
- [x] It should be possible to register a gym

<br>

## Business requirements <a name="business"></a>

- [x] The user must not be able to register with a duplicate email
- [x] The user cannot check in twice on the same day
- [x] The user cannot check in if not within (100m) of the gym
- [x] The check-in can only be validated up to 20 minutes after creation
- [ ] The check-in can only be validated by administrators
- [ ] The gym can only be registered by administrators

<br>

**Non-Functional Requirements (NFR)**

- [x] The user's password needs to be encrypted
- [x] The application data needs to be persisted in a PostgreSQL database
- [x] All data lists need to be paginated with 20 items per page
- [ ] The user should be identified by a JSON Web Token (JWT)

<br>

## Commands executed <a name = "commands"></a>

```bash
# Starting project
 npm init -y

# Install TypeScript, Node.js types, tsx and tsup
npm i typescript @types/node tsx tsup -D

# Inicialize TypeScript
npx tsc --init

# Install Fastify
npm i fastify

# Install dotenv
npm i dotenv

# Install Zod
npm i zod

# Install ESLint
npm i eslint @rocketseat/eslint-config -D

# Setting custom ESLINT [OPTIONAL]
npx eslint --init

# Install Prisma
npm i prisma -D

# Install Prisma client
npm i @prisma/client

# Inicialize Prisma
npx prisma init

# Create typing
npx prisma generate

# Create migration
npx prisma migrate dev

# Run Prisma Studio
npx prisma studio

# Install bcryptjs
npm i bcryptjs && npm i @types/bcryptjs -D

# Install Vitest
npm i vitest vite-tsconfig-paths -D

# Install Vitest UI
npm i @vitest/ui -D

# Install dayjs
npm i dayjs
```

<br>

## Technologies used <a name="technologies"></a>

- [Fastify](https://fastify.io "Fastify - Fast and low overhead web framework, for Node.js") - Fast and low overhead web framework, for Node.js
- [Node.js](https://nodejs.org "Node.js") - JavaScript runtime environment / plataform
- [PostgreSQL](https://www.postgresql.org "PostgreSQL") - Open source relational database
- [Prisma](https://www.prisma.io "Prisma ORM") - ORM (Object Mapping Relation) for Node.js and TypeScript
- [tsup](https://tsup.egoist.dev "tsup - Bundle your TypeScript library with no config, powered by esbuild") - Bundle your TypeScript library with no config, powered by esbuild
- [TypeScript](https://www.typescriptlang.org "TypeScript") - Programming language and superset for JavaScript
- [Vitest](https://vitest.dev "Vitest - Testing framework that use esbuild") - Testing framework that use esbuild
- [Zod](https://zod.dev "Zod") - TypeScript-first schema validations

---

Made with ♥ by **Guilherme Bezerra** 👋 [Get in touch!](https://www.linkedin.com/in/gbdsantos)
