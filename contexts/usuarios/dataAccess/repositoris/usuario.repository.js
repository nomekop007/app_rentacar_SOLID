class UsuarioRepository {

    constructor({ db }) {
        this._db = db;
    }

    getUsuarios() {
        return this._db.usuarios.findAll();
    }

    createUsuario(usuario) {
        return this._db.usuarios.create(usuario);
    }

}

module.exports = UsuarioRepository;