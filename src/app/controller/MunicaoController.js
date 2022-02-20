const Municao = require("../model/Municao");
class ObjetivoController{
    async store(req, res){
        const data = await Municao.create(req.body);
        return res.json(data);
    }
    async list(req, res){
        const data = await Municao.find({});
        return res.json(data);
    }
    async delete(req, res){
            const {id} = req.body;
            const MunicaoObjeto = await Municao.findOne({where: {"id": id}})
            if(MunicaoObjeto){
                await Municao.remove(MunicaoObjeto);
                return console.log(204)
            }else{
                console.log(404)
            }
    }
    async update(req, res){
        await Municao.findOneAndUpdate(req.body);
    }
    
}
module.exports = new ObjetivoController();