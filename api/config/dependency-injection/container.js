const { asClass, createContainer, asFunction, asValue } = require('awilix');

let container = createContainer();

const config = require('../envirements');
const StarUp = require('../../startup');
const Server = require('../../server');
const Routes = require('../../routes');
const db = require('../database/sequelize');

const containerUsuario = require('./usuario/usuario.injection');

container
    .register({
        db: asValue(db),
        config: asValue(config),
        app: asClass(StarUp).singleton(),
        server: asClass(Server).singleton(),
        router: asFunction(Routes).singleton()
    })

container = containerUsuario(container);

module.exports = container;