<h1 align="center">
    Practical Challenge #02
    <h3 align="center">Creating REST API with Node.js</h3>
</h1>

<p align="center">
  <a href="https://nodejs.org">
    <img alt="Node.js version" src="https://img.shields.io/badge/node.js-v20.11.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://github.com/gbdsantos/ignite/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gbdsantos/ignite.svg">
  </a>
</p>

<p align="center">
    <a href="#about" alt="About">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#business" alt="About">Business requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#commands-executed" alt="Commands executed">Commands executed</a>
</p>

## Getting Start

```bash
# Run application
npm run dev
```

## About

In this challenge you will develop an API to perform CRUD of your _tasks_.
The API must contain the following functionalities:

- [x] Creation of a task
- [x] List of all tasks
- [x] Update a task by `id`
- [x] Remove a task by `id`
- [x] Mark a task as complete by `id`
- [x] And the real challenge: Importing tasks in bulk via a CSV file

<br>

## Business requirements and Routes (endpoints) <a name="business"></a>

Before the routes, let's understand what structure (properties) a task should have:

- `id` - Unique identifier for each task
- `title` - Task title
- `description` - Detailed description of the task
- `completed_at` - Date when the task was completed. The initial value must be `null`
- `created_at` - Date when the task was created.
- `updated_at` - Must always be changed to the date when the task was updated.

**Routes:**

<details>
  <summary>POST /tasks</summary>

- [x] It must be possible to create a user
</details>

<br>

## Extra mile

- [x] Validate whether the `title` and `description` properties of the `POST` and `PUT` routes are present in the `body` of the request.
- [x] In routes that receive `/:id`, in addition to validating whether the `id` exists in the database, return the request with a message stating that the record does not exist.

<br>

## Commands executed

```bash
# Starting project
 npm init -y

# Install TypeScript
npm install typescript @types/node tsx tsup -D

# Inicialize TypeScript
npx tsc --init

# Install Fastify, dotenv, knex and zod
npm install fastify dotenv knex zod
```

<br>

---

Made with ♥ by **Guilherme Bezerra**  👋 [Get in touch!](https://www.linkedin.com/in/gbdsantos)
