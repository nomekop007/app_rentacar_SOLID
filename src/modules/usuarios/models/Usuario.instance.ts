
import { DataTypes } from "sequelize";
import UsuarioModel from "./Usuario.model";

export const UsuarioInstance = (sequelize) => {
    UsuarioModel.init({
        id_usuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        estado_usuario: DataTypes.BOOLEAN,
        nombre_usuario: DataTypes.STRING,
        email_usuario: DataTypes.STRING,
        clave_usuario: DataTypes.STRING(150),
        userAt: DataTypes.STRING,
    }, { tableName: "usuarios", sequelize });
};
