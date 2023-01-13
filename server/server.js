const fastify = require('fastify');
const server = fastify({ logger: true });

const path = require('path');
server.register(require('@fastify/static'), { root: path.join(__dirname, '..', 'public') });

server.get('/', (request, reply) => {
  reply.sendFile('index.html');
});

const axios = require('axios');

server.get('/api/v1/data', (request, reply) => {
  axios.get(request.query.q).then((response) => reply.send(response.data));
});

server.listen({ port: 3000 });
