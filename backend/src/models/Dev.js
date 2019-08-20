const { Schema, model } = require('mongoose'); // importando dependencias dentro do objeto mongoose

// estrutura (schema) da tabela para armazenar um desenvolvedor na tabela
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type:String,
        required: true,
    },
}, {
    timestamps: true,
}); 

// exportar o model com os dados acima
module.exports = model('Dev', DevSchema);