module.exports = (sequelize, type) => {
    const Sucursal = sequelize.define("sucursales", {
        id_sucursal: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_sucursal: type.STRING,
        userAt: type.STRING,
    });
    Sucursal.associate = function (models) {
        Sucursal.hasMany(models.Usuario, { foreignKey: { name: "id_sucursal" }, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    }
    return Sucursal;
};