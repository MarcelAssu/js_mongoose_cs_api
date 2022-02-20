const mongoose = require("mongoose");
const ArmaSchema = new mongoose.Schema(
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
        comprimento_cano: {
            type: Number,
            required: true,
            default: 0
        },
        type: {
            type: String,
            required: true,

        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Arma", ArmaSchema);