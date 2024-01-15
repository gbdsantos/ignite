import http from 'node:http';

import { json } from './middlewares/json.js';
import { routes } from './routes.js';
import { extractQueryParams } from './utils/extract-query-params.js';

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

// Query Parameters: URL Stateful => Filters, pagination, not required
// Route Parameters: Resource identification
// Request Body:     Submitting information from a form (HTTPs)

// GET    http://localhost:3333/users?userId=1
// DELETE http://localhost:3333/users/1
// POST   http://localhost:3333/users

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await json(request, response);

  console.log(method, url);
  // Output: GET /

  const route = routes.find(route => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const routeParams = request.url.match(route.path);

    // console.log(extractQueryParams(routeParams.groups.query));

    const { query, ...params } = routeParams.groups;

    request.params = params;
    request.query = query ? extractQueryParams(query) : {};

    return route.handler(request, response);
  }

  return response.writeHead(404).end();
});

server.listen(3333);
