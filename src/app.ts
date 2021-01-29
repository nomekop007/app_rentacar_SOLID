import * as bodyParser from "body-parser";
import express, { Express } from "express";
import { Sequelize } from "sequelize-typescript";
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
            logging: false,
            models: [__dirname + "/../models"]
        });

        this.dbClient.sync({ alter: true }).then(() => {
            console.log("tablas sincronizadas");
        });
    }

}

export default new App();
