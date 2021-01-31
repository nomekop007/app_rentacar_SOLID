const Sequelize = require('sequelize');
const { DB } = require('../envirements');
const config = DB;
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const usuarioEntity = require("../../../contexts/usuarios/dataAccess/entities/usuario.entity");


db.usuarios = usuarioEntity(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;