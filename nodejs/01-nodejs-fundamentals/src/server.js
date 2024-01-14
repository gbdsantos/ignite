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

// Stateful (data stored locally in memory)
// Stateless (does not save anything in memory)

// Headers (Request / Response) => Metadata

const users = [];

const server = http.createServer((request, response) => {
  const { method, url } = request;

  console.log(method, url);
  // Output: GET /

  if (method === 'GET' && url === '/users') {
    // Early return
    return response
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    })

    return response.end('User creation');
  }

  return response.end('Hello World');
});

server.listen(3333);
