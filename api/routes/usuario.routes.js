const { Router } = require('express');


module.exports = function ({ UsuarioController }) {
    const router = Router();

    router.get('/mostrarUsuarios', UsuarioController.getUsuarios.bind(UsuarioController));

    router.post('/crearUsuario', UsuarioController.createUsuario.bind(UsuarioController));

    return router;
};