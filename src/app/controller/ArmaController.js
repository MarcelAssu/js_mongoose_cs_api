const Arma = require("../model/Arma");
class ArmaController{
    async store(req, res){
        const data = await Arma.create(req.body);
        return res.json(data);
    }
    async list(req, res){
        const data = await Arma.find({});
        return res.json(data);
    }
    async delete(req, res){
            const {id} = req.body;
            const ArmaObjeto = await Arma.findOne({where: {"id": id}})
            if(ArmaObjeto){
                await Arma.remove(ArmaObjeto);
                return console.log(204)
            }else{
                console.log(404)
            }
    }
    async update(req, res){
        await Arma.findOneAndUpdate(req.body);    
    }
    
}
module.exports = new ArmaController();