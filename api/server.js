const express = require('express');

class Server {
    constructor({ config, router }) {
        this.config = config;
        this._express = express();
        this._express.use(router);
    }

    start() {
        return new Promise((resolve, reject) => {
            const http = this._express.listen(this.config.PORT, () => {
                const { port } = http.address();
                console.log('aplication run in port ', port);
                resolve();
            });
        })
    }

}

module.exports = Server;