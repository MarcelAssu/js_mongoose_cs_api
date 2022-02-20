const mongoose = require("mongoose");
const MunicaoSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        peso: {
            type: Number,
            required: true,
            default: 0
        },
        valor: {
            type: Number,
            required: true,
            default: 0
        },
        explosive: {
            type: String,
            required: true
        },
        arma: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Arma',
            required: true
        },
        calibre:{
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Municao", MunicaoSchema);
