const mapper = require('automapper-js');
const usuarioDto = require('../dtos/usuario.dtos');
class UsuarioController {

    constructor({ UsuarioServices }) {
        this._usuarioService = UsuarioServices;
    }


    async getUsuarios(req, res) {
        let usuarios = await this._usuarioService.getUsuarios();
        console.log(usuarios)
        //  usuarios = usuarios.map(usuario => mapper(usuarioDto, usuario));
        return res.send({ success: true, data: usuarios });
    }


    async getUsuario(req, res) {
        const { id } = req.params;
        let usuario = await this._usuarioService.getUsuario(id);
        usuario = mapper(usuarioDto, usuario);
        return res.send({ success: true, data: usuario });
    }

    async createUsuario(req, res) {
        const { body } = req;
        const createUser = await this._usuarioService.createUsuario(body);
        const usuario = mapper(usuarioDto, createUser);
        return res.send({ success: true, data: usuario });
    }

    async updateUsuario(req, res) {
        const { body } = req;
        const { id } = req.params;
        await this._usuarioService.updateUsuario(id, body);
        return res.send({ success: true });
    }
}

module.exports = UsuarioController;