const Sequelize = require('sequelize');
const { DB } = require('../envirements');
const config = DB;
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const usuarioEntity = require("../../../contexts/usuarios/dataAccess/usuario.entity");
const rolesEntity = require("../../../contexts/roles/dataAccess/rol.entity");
const sucursalEntity = require("../../../contexts/sucursales/dataAcess/sucursal.entity");


db.usuarios = usuarioEntity(sequelize, Sequelize);
db.roles = rolesEntity(sequelize, Sequelize);
db.sucursales = sucursalEntity(sequelize, Sequelize);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;