import * as bodyParser from "body-parser";
import express, { Express } from "express";
import { Sequelize } from "sequelize";
import { UsuarioInstance } from "./modules/usuarios/models/Usuario.instance";

class App {

    public app: Express = express();
    private dbClient: Sequelize;

    constructor() {
        this.config();
        this.initDatabase();
    }

    public retrieveDbClient() {
        return this.dbClient;
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private async initDatabase() {
        this.dbClient = new Sequelize("mysql://root@localhost/bd_rentacar_solid", {
            logging: false
        });
        UsuarioInstance(this.dbClient);

        this.dbClient.sync({ alter: true }).then(() => {
            console.log("tablas sincronizadas");
        });
    }

}

export default new App();
