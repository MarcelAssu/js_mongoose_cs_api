const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.express = express();
        this.database();
        this.middlewares();
        this.routes();
        this.express.listen(3002, () =>
            console.log(`Sua API REST está funcionando na porta 3002 `)
        );
    }
    database() {
        mongoose.connect(db.uri, { useNewUrlParser: true }).then(
            () => {console.log(`Conectou no ${db.uri}`)},
            err => {console.log(`Não Conectou no ${db.uri}`)}
        );
    }
    middlewares() {
        this.express.use(express.json());
    }
    routes() {
        this.express.use(require("./routes"));
    }
}
module.exports = new App().express;