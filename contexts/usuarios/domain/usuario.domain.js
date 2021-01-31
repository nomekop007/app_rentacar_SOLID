const { attributes } = require('structure');

const Usuario = attributes({
    estado_usuario: { type: Boolean },
    nombre_usuario: { type: String },
    email_usuario: { type: String },
    clave_usuario: { type: String },
    userAt: { type: String },
})(class Usuario {
    getCompleteName = () => this.nombre_usuario;
})

module.exports = Usuario;