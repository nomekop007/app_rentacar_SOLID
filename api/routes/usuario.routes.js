const { Router } = require('express');

module.exports = function ({ UsuarioController }) {
    const router = Router();

    router.get('/mostrarUsuarios', UsuarioController.getUsuarios.bind(UsuarioController));

    router.post('/crearUsuario', UsuarioController.createUsuario.bind(UsuarioController));

    router.get("/buscarUsuario/:id", UsuarioController.getUsuario.bind(UsuarioController));

    router.put("/editarUsuario/:id", UsuarioController.updateUsuario.bind(UsuarioController));

    return router;
};