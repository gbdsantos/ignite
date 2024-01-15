import http from 'node:http';

import { json } from './middlewares/json.js';
import { routes } from './routes.js';

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

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await json(request, response);

  console.log(method, url);
  // Output: GET /

  const route = routes.find(route => {
    return route.method === method && route.path === url;
  });

  if (route) {
    return route.handler(request, response);
  }

  return response.writeHead(404).end();
});

server.listen(3333);
