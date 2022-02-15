const Jogador = require("../model/Jogador");
class JogadorController {
    async store(req, res) {
        const data = await Jogador.create(req.body);
        return res.json(data);
    }
    async list(req, res) {
        const data = await Jogador.find({});
        return res.json(data);
    }
}
module.exports = new JogadorController();
