import http from 'node:http';

// CommonJS => require
/**
 * ESModules => import/export
 * package.json => "type": "module"
**/

const server = http.createServer((request, response) => {
  return response.end('Hello World');
});

server.listen(3333);
