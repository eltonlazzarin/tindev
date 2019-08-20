const axios = require('axios'); // importando axios
const Dev = require('../models/Dev'); // importando Dev

// criar um desenvolvedor pelo metodo store
module.exports = {
    async store(req, res) {
        const { username } = req.body;
        
        // validar se o usuario ja existe
        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return res.json(userExists);
        }

        // como a requisição é assincrona (demora que retornar) temos que usar await, execute a linha toda, depois as demais linhas abaixo e quando usamos await somos obrigado a usar o async antes do metodo, neste caso o metodo store(req, res);
        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar: avatar_url
        })

        return res.json(dev); // retorna os dados do usuário no GITHUB
    }
};