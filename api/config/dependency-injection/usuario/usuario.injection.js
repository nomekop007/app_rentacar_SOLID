const { asClass, asFunction } = require('awilix');
const UsuarioRoutes = require('../../../routes/usuario.routes')
const UsuarioController = require('../../../controllers/usuario.controller');
const UsuarioServices = require('../../../../contexts/usuarios/services/usuario.services')
const UsuarioBusiness = require('../../../../contexts/usuarios/domain/usuario.business');
const UsuarioRepository = require('../../../../contexts/usuarios/dataAccess/usuario.repository')

module.exports = (container) => {
    container.register({
        UsuarioRoutes: asFunction(UsuarioRoutes).singleton(),
        UsuarioController: asClass(UsuarioController).singleton(),
        UsuarioServices: asClass(UsuarioServices).singleton(),
        UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
        UsuarioRepository: asClass(UsuarioRepository).singleton(),
    })
    return container;
}
