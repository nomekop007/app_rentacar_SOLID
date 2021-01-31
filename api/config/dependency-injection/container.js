const { asClass, createContainer, asFunction, asValue } = require('awilix');

let container = createContainer();

const config = require('../envirements');
const StarUp = require('../../startup');
const Server = require('../../server');
const Routes = require('../../routes');
const db = require('../database/sequelize');

const containerUsuario = require('./usuario/usuario.injection');

container
    .register({ db: asValue(db) })
    .register({ config: asValue(config) })
    .register({ app: asClass(StarUp).singleton() })
    .register({ server: asClass(Server).singleton() })
    .register({ router: asFunction(Routes).singleton() })

container = containerUsuario(container);

module.exports = container;