import http from 'node:http';
import { randomUUID } from 'node:crypto';
import { json } from './middlewares/json.js';

import { Database } from './database.js';

// CommonJS => require
/**
* ESModules => import/export
* package.json => "type": "module"
**/

// - HTTP Method
// - URL

// GET    => Search for a resource in the back-end
// POST   => Create a resource in the back-end
// PUT    => Update a resource in the back-end
// PATCH  => Update a specific information of resource in the back-end
// DELETE => Delete a resource in the back-end

// Stateful (data stored locally in memory)
// Stateless (does not save anything in memory)

// Headers (Request / Response) => Metadata

// HTTP Status Codes

const database = new Database();

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await json(request, response);

  console.log(method, url);
  // Output: GET /

  if (method === 'GET' && url === '/users') {
    const users = database.select('users');

    return response.end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = request.body;

    const user = {
      id: randomUUID(),
      name,
      email
    };

    database.insert('users', user);

    return response.writeHead(201).end();
  }

  return response.writeHead(404).end();
});

server.listen(3333);
