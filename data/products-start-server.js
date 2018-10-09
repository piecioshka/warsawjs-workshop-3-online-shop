const PATH = 'data/products.json';
const PORT = 2095;

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(PATH);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(PORT, function () {
    console.log(`JSON Server is running on port ${PORT}`);
});
