class UsuarioRepository {

    constructor({ db }) {
        this._db = db;
    }

    createUsuario(usuario) {
        return this._db.usuarios.create(usuario);
    }

    getUsuarios() {
        return this._db.usuarios.findAll();
    }

    getUsuario(id) {
        return this._db.usuarios.findOne({
            where: { id_usuario: id },
        });
    }

    updateUsuario(id, usuario) {
        return this._db.usuarios.update(usuario, {
            where: { id_usuario: id },
        });
    }

}

module.exports = UsuarioRepository;