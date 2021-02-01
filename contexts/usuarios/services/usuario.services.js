class UsuarioServices {
    constructor({ UsuarioBusiness }) {
        this._usuarioBusiness = UsuarioBusiness;
    }

    async getUsuarios() {
        const usuarios = await this._usuarioBusiness.getUsuarios();
        return usuarios;
    }


    async getUsuario() {
        return await this._usuarioBusiness.getUsuario();
    }


    async createUsuario(usuario) {
        return await this._usuarioBusiness.createUsuario(usuario);
    }


    async updateUsuario(id, usuario) {
        return await this._usuarioBusiness.updateUsuario(id, usuario);
    }

}

module.exports = UsuarioServices;