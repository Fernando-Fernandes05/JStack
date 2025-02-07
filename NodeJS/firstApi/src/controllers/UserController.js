const users = require('../mocks/users')

module.exports = {
    listUsers(request, response) {
        response.writeHead(200, { 'Content-Type' : 'application/json' });
        response.end(JSON.stringify(users)); //a função JSON.stringify converte objeto e array para string
    },
};