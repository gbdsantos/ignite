import http from 'node:http';

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

const server = http.createServer((request, response) => {
  const { method, url } = request;

  console.log(method, url);
  // Output: GET /

  if (method === 'GET' && url === '/users') {
    // Early return
    return response.end('Users listing');
  }

  if (method === 'POST' && url === '/users') {
    return response.end('User creation')
  }

  return response.end('Hello World');
});

server.listen(3333);
