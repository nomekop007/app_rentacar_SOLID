const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');


module.exports = function ({ UsuarioRoutes }) {
    const router = Router();
    const apiRoute = Router();
    apiRoute
        .use(cors())
        .use(bodyParser.json())
        .use(compression());

    apiRoute.use('/usuarios', UsuarioRoutes);
    router.use('/rentacar', apiRoute);
    return router;
}