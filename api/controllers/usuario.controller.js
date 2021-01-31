class UsuarioController {

    constructor({ UsuarioServices }) {
        this._usuarioService = UsuarioServices;
    }

    async getUsuarios(req, res) {
        const usuarios = await this._usuarioService.getUsuarios();
        return res.send({ success: true, data: usuarios });
    }

    async createUsuario(req, res) {
        console.log(req.body)
        const { body } = req;
        const createUser = await this._usuarioService.createUsuario(body);
        res.send({ success: true, data: createUser });
    }
}

module.exports = UsuarioController;