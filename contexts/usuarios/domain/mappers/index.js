const Usuario = require('../usuario.domain');

module.exports = {
    toDomainEntity(usuario) {
        const { estado_usuario, nombre_usuario, email_usuario, clave_usuario } = usuario;
        return new Usuario({ estado_usuario, nombre_usuario, email_usuario, clave_usuario });
    }
}