<h1 align="center">
    Practical Challenge #01
    <h3 align="center">Node.js Fundamentals</h3>
</h1>

<p align="center">
  <a href="https://nodejs.org">
    <img alt="Node.js version" src="https://img.shields.io/badge/node.js-v20.11.0-43853D?style=flat&logo=node.js&logoColor=white&labelColor=43853D&color=5a5a5a">
  </a>

  <a href="https://csv.js.org/parse">
    <img alt="csv-parse" src="https://img.shields.io/badge/csv--parse-v5.5.3-blue?logo=csv-parse&labelColor=20232A&color=5a5a5a">
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

## Commands executed

```bash
# Starting project
 npm init -y

# Install csv-parse
npm install csv-parse

# Import tasks from CSV file
node src/streams/import-csv.js
```

<br>

---

Made with ♥ by **Guilherme Bezerra** :wave: [Get in touch!](https://www.linkedin.com/in/gbdsantos)
