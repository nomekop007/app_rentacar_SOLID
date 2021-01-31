const { toDomainEntity } = require('../domain/mappers')
const { toDbEntity } = require('../dataAccess/mappers')

class UsuarioServices {
    constructor({ UsuarioRepository }) {
        this._usuarioRepository = UsuarioRepository;
    }

    async getUsuarios() {
        const usuarios = await this._usuarioRepository.getUsuarios();
        return usuarios.map(toDomainEntity);
    }

    async createUsuario(usuario) {
        usuario = toDbEntity(usuario);
        return await this._usuarioRepository.createUsuario(usuario);
    }

}

module.exports = UsuarioServices;