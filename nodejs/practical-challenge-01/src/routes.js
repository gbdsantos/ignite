import { Database } from './database.js';
import { randomUUID } from 'node:crypto';

import { buildRoutePath } from './utils/build-route-path.js';

const database = new Database();

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (request, response) => {
      const { search } = request.query;

      const tasks = database.select('tasks', search ? {
        title: search,
        description: search
      } : null);

      return response.end(JSON.stringify(tasks));
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (request, response) => {
      const { title, description } = request.body;

      if (!title || !description) {
        return response.writeHead(400).end(JSON.stringify({
          status: "error",
          status_code: 400,
          message: "Expected receive title and description properties."
        }));
      }

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        updated_at: null,
        created_at: new Date(),
      };

      database.insert('tasks', task);

      return response.writeHead(201).end();
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (request, response) => {
      const { id } = request.params;

      const allTasks = database.select('tasks');

      const [task] = allTasks.filter(row => row.id === id);

      if (!task) {
        return response.writeHead(404).end(JSON.stringify({
          status: "error",
          status_code: 404,
          message: "The specified task does not exist."
        }));
      }

      database.delete('tasks', id);

      return response.writeHead(204).end();
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (request, response) => {
      const { id } = request.params;
      const { title, description } = request.body;

      if (!title || !description) {
        return response.writeHead(400).end(JSON.stringify({
          status: "error",
          status_code: 400,
          message: "Expected receive title and description properties."
        }));
      }

      const allTasks = database.select('tasks');

      const [task] = allTasks.filter(row => row.id === id);

      if (!task) {
        return response.writeHead(404).end(JSON.stringify({
          status: "error",
          status_code: 404,
          message: "The specified task does not exist."
        }));
      }

      database.update('tasks', id, {
        title,
        description,
        completed_at: task.completed_at,
        created_at: task.created_at,
        updated_at: new Date()
      });

      return response.writeHead(204).end();
    }
  }
]
