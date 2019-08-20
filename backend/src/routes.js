const express = require('express'); // importando o express
const DevController = require('./controllers/DevController'); // importando arquivo DevController

const routes = express.Router(); // função dentro do express

/* Rota com o metodo get que não vamos usar
routes.get('/', (req, res) => { // chamada de rota no navegador (URL) - neste caso localhost:3333 para requisições e resposta. (req, res) => é uma arrow function
    return res.json({ message: `Hello ${req.query.name}` });
});
*/

// cadastrando um novo desenvolvedor dentro da aplicação
routes.post('/devs', DevController.store);  

// exportando as rotas para outros arquivos
module.exports = routes; // routes aqui é uma variável
