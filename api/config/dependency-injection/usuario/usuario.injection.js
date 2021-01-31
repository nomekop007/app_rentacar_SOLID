const { asClass, asFunction } = require('awilix');
const UsuarioRoutes = require('../../../routes/usuario.routes')
const { UsuarioController } = require('../../../controllers');
const UsuarioServices = require('../../../../contexts/usuarios/services/usuario.services')
const UsuarioRepository = require('../../../../contexts/usuarios/dataAccess/repositoris/usuario.repository')

module.exports = (container) => {
    container.register({ UsuarioController: asClass(UsuarioController).singleton() })
        .register({ UsuarioRoutes: asFunction(UsuarioRoutes).singleton() })
        .register({ UsuarioServices: asClass(UsuarioServices).singleton() })
        .register({ UsuarioRepository: asClass(UsuarioRepository).singleton() })
    return container;
}
