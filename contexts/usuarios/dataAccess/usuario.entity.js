module.exports = (sequelize, type) => {
    const Usuario = sequelize.define('usuarios', {
        id_usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        estado_usuario: type.BOOLEAN,
        nombre_usuario: type.STRING,
        email_usuario: type.STRING,
        clave_usuario: type.STRING(150),
        userAt: type.STRING,
    });

    Usuario.associate = function (models) {
        Usuario.belongsTo(models.Rol, { foreignKey: { name: 'id_rol' }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
        Usuario.belongsTo(models.Sucural, { foreignKey: { name: "id_sucursal" }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    }

    return Usuario;
};