const mapper = require('automapper-js');
const Usuario = require('./usuario.model');

class UsuarioBusiness {
    constructor({ UsuarioRepository }) {
        this._usuarioRepository = UsuarioRepository;
    }

    async getUsuarios() {
        const usuarios = await this._usuarioRepository.getUsuarios();
        //  usuarios = usuarios.map(usuario => mapper(Usuario, usuario.toJSON()));
        return usuarios;
    }

    async getUsuario(id) {
        const usuario = await this._usuarioRepository.getUsuario(id);
        return mapper(Usuario, usuario);
    }

    async createUsuario(usuario) {
        usuario = mapper(Usuario, usuario);
        const createUsuario = await this._usuarioRepository.createUsuario(usuario);
        return mapper(Usuario, createUsuario);
    }

    async updateUsuario(id, usuario) {
        usuario = mapper(Usuario, usuario);
        const updateUsuario = await this._usuarioRepository.updateUsuario(id, usuario);
        return mapper(Usuario, updateUsuario);
    }



}

module.exports = UsuarioBusiness;