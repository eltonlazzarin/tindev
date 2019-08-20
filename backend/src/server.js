const express = require('express'); // importando o express
const mongoose = require('mongoose'); // importanto o mongoose

const routes = require('./routes'); // importando o arquivo routers.js

const server = express(); // criando o servidor chamando a função express 

// conexão com o mongoDB cloud que importamos do cluster
mongoose.connect('mongodb+srv://omnistack:ClarO123@cluster0-q8v9x.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
}); 
    

server.use(express.json()); // informando para o servidor que as requisições serão em json
server.use(routes); // é como dizer, servidor use o "módulo" routes que importamos

server.listen(3333); // porta do servidor criado

