module.exports = (sequelize, type) => {
    const Rol = sequelize.define('roles', {
        id_rol: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_rol: type.STRING,
        userAt: type.STRING,
    });

    Rol.associate = function (models) {
        Rol.hasMany(models.Usuario, { foreignKey: { name: 'id_rol' }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    }

    return Rol;
};