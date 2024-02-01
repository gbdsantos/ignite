<h1 align="center">
    Daily Diet API - Desafio Prático #02
    <h3 align="center">Criando API REST com Node.js</h3>
</h1>

<p align="center">
  <a href="https://nodejs.org">
    <img alt="versão do Node.js" src="https://img.shields.io/badge/node.js-v20.11.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://github.com/gbdsantos/ignite/commits/master">
    <img alt="último commit GitHub" src="https://img.shields.io/github/last-commit/gbdsantos/ignite.svg">
  </a>
</p>

<p align="center">
    <a href="#sobre" alt="Sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#business" alt="Regras de Negócio">Regras de Negócio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#comandos-executados" alt="Commands executed">Comandos executados</a>
</p>

## Iniciando

```bash
# Run application
npm run dev
```

## Sobre

Neste desafio deve ser desenvolvido uma API para controle de dieta diária.

<br>

## Regras de Negócio e Rotas (endpoints) <a name="business"></a>

- [ ] Deve ser possível criar um usuário
- [ ] Deve ser possível identificar o usuário entre as requisições
- [ ] Deve ser possível registrar uma refeição feita, com as seguintes informações:
    *As refeições devem ser relacionadas a um usuário.*
    - [ ] Nome
    - [ ] Descrição
    - [ ] Data e Hora
    - [ ] Está dentro ou não da dieta
- [ ] Deve ser possível editar uma refeição, podendo alterar todos os dados acima
- [ ] Deve ser possível apagar uma refeição
- [ ] Deve ser possível listar todas as refeições de um usuário
- [ ] Deve ser possível visualizar uma única refeição
- [ ] Deve ser possível recuperar as métricas de um usuário
    - [ ] Quantidade total de refeições registradas
    - [ ] Quantidade total de refeições dentro da dieta
    - [ ] Quantidade total de refeições fora da dieta
    - [ ] Melhor sequência de refeições dentro da dieta
- [ ] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou

**Rotas:**

<details>
  <summary> POST /tasks  </summary>

- [x] It must be possible to create a task in the database, sending the `title` and `description` fields through the `body` of the request.
- [x] When creating a task, the fields: `id`, `created_at`, `updated_at` and `completed_at` must be filled in automatically, as per the orientation of the properties above.
</details>

<details>
   <summary>GET /tasks</summary>

- [x] It must be possible to list all tasks saved in the database.
- [x] It should also be possible to perform a search, filtering tasks by `title` and `description`
</details>

<details>
   <summary>PUT /tasks/:id </summary>

- [x] It must be possible to update a task by `id`.
- [x] In the `body` of the request, you must receive only the `title` and/or `description` to be updated.
- [x] If only the `title` is sent, it means that the `description` cannot be updated and vice versa.
- [x] Before carrying out the update, validation must be carried out whether the `id` belongs to a task saved in the database.
</details>

<details>
   <summary>DELETE /tasks/:id</summary>

- [x] It should be possible to remove a task by `id`.
- [x] Before carrying out the removal, validation must be carried out whether the `id` belongs to a task saved in the database.
</details>

<details>
   <summary>PATCH /tasks/:id/complete</summary>

- [x] It must be possible to mark the task as complete or not. This means that if the task is completed, it should return to its “normal” state.
- [x] Before making the change, a validation must be carried out whether the `id` belongs to a task saved in the database.
</details>

<br>

## Extra mile

- [x] Validate whether the `title` and `description` properties of the `POST` and `PUT` routes are present in the `body` of the request.
- [x] In routes that receive `/:id`, in addition to validating whether the `id` exists in the database, return the request with a message stating that the record does not exist.

<br>

## Comandos executados

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

# Install Knex.js and SQLite native driver
npm install knex
```

<br>

---

Feito com ♥ por **Guilherme Bezerra** 👋 [Get in touch!](https://www.linkedin.com/in/gbdsantos "LinkedIn - Guilherme Bezerra")
