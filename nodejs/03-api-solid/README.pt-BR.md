<h1 align="center">
    <br>
    API Node.js com SOLID
</h1>

<p align="center">
  <a href="https://fastify.io">
    <img alt="imagem do logotipo Fastify" src="https://img.shields.io/badge/fastify-20232A?style=flat&logo=fastify&logoColor=white">
  </a>

  <a href="https://nodejs.org">
    <img alt="imagem do logotipo Nodejs" src="https://img.shields.io/badge/node.js-v20.11.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://www.prisma.io">
    <img alt="imagem do logotipo Prisma" src="https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white" />
  </a>

  <a href="https://www.postgresql.org">
    <img alt="imagem do logotipo PosgreSQL" src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-&logo=postgresql&logoColor=white"  />
  </a>

  <a href="https://www.typescriptlang.org">
    <img alt="imagem do logotipo TypeScript" src="https://img.shields.io/badge/typescript-007acc?style=flat&logo=typescript&logoColor=white">
  </a>

  <a href="https://vitest.dev" alt="Vitest - Testing framework that use esbuild">
    <img alt="imagem do logotipo Vitest" src="https://img.shields.io/badge/Vitest-FFA116?style=flat&logo=vitest&logoColor=white"  />
  </a>

  <a href="https://zod.dev" alt="Zod - Validação de esquema TypeScript-first com inferência de tipo estático">
    <img alt="imagem do logotipo Zod" src="https://img.shields.io/badge/Zod-274d82?style=flat&logo=zod&logoColor=white" />
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
  <a href="https://github.com/gbdsantos/ignite/tree/master/nodejs/03-api-solid" hreflang="en-us" alt="en-us">🇺🇸 inglês
  </a>
</div>

<br>

🍏 Aplicação parecida com o GymPass.
A aplicação no estilo GymPass foi desenvolvida como parte do Projeto 03 do módulo "Nível 03 Implementando SOLID > API Node.js com SOLID" do Bootcamp Ignite Node.js na Rocketseat.

## 🚀 Iniciando <a name = "start"></a>

```bash
# Instalar dependências
npm install --no-workspaces

# Criar um novo ambiente do Docker
docker compose up -d

# Executar migrations
npx prisma migrate dev

# Executar aplicação
npm run dev

# Executar testes
npm test

# Buildar a aplicação
npm run build
```

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar
- [x] Deve ser possível se autenticar
- [x] Deve ser possível obter o perfil de um usuário logado
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado
- [x] Deve ser possível o usuário obter seu histórico de check-ins
- [x] Deve ser possível o usuário buscar academias próximas (até 10km)
- [x] Deve ser possível o usuário buscar academias pelo nome
- [x] Deve ser possível o usuário realizar check-in em uma academia
- [x] Deve ser possível validar o check-in de um usuário
- [x] Deve ser possível cadastrar uma academia

## RNs (Regras de negócio) <a name = "business"></a>

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado
- [x] O usuário não pode fazer 2 check-ins no mesmo dia
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [ ] O check-in só pode ser validade até 20 minutos após criado
- [ ] O check-in só pode ser validado por administradores
- [ ] A academia só pode ser cadastrada por administradores

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por página
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token)

<br>

## Comandos executados <a name = "commands"></a>

```bash
# Iniciar projeto
 npm init -y

# Instalar TypeScript, Node.js types, tsx e tsup
npm i typescript @types/node tsx tsup -D

# Inicializar TypeScript
npx tsc --init

# Instalar Fastify
npm i fastify

# Instalar dotenv
npm i dotenv

# Instalar Zod
npm i zod

# Instalar ESLint
npm i eslint @rocketseat/eslint-config -D

# Configurando ESLINT customizado [OPCIONAL]
npx eslint --init

# Instalar Prisma
npm i prisma -D

# Instalar Prisma client
npm i @prisma/client

# Inicializar Prisma
npx prisma init

# Criar tipagem do Prisma
npx prisma generate

# Criar migration
npx prisma migrate dev

# Executar Prisma Studio
npx prisma studio

# Instalar bcryptjs
npm i bcryptjs && npm i @types/bcryptjs -D

# Instalar Vitest
npm i vitest vite-tsconfig-paths -D

# Instalar Vitest UI
npm i @vitest/ui -D

# Instalar dayjs
npm i dayjs
```

<br>

## Tecnologias utilizadas <a name = "technologies"></a>

- [Fastify](https://fastify.io "Fastify - Framework web rápido e de baixo custo, para Node.js") - Framework web rápido e de baixo custo, para Node.js
- [Node.js](https://nodejs.org "Node.js") - Ambiente/plataforma em tempo de execução para JavaScript
- [PostgreSQL](https://www.postgresql.org "PostgreSQL") - Banco de dados relacional *open-source*
- [Prisma](https://www.prisma.io "Prisma ORM") - ORM (Object Mapping Relation) para Node.js e TypeScript
- [tsup](https://tsup.egoist.dev "tsup - Compile sua aplicação/biblioteca TypeScript sem configurações, *powered by* esbuild") - Compile sua aplicação/biblioteca TypeScript sem configurações, *powered by* esbuild
- [TypeScript](https://www.typescriptlang.org "TypeScript") - Linguagem de programação e *superset* para JavaScript
- [Vitest](https://vitest.dev "Vitest - Framework de teste que usa esbuild") - Framework de teste que usa esbuild
- [Zod](https://zod.dev "Zod") - Validação de estruturas de dados e tipagens *TypeScript-first*

---

Feito com ❤️ por **Guilherme Bezerra** 👋 [Entrar em contato!](https://www.linkedin.com/in/gbdsantos)
