const container = require('./api/config/dependency-injection/container');

const application = container.resolve('app');
const db = container.resolve('db');

application.start().then(async () => {
    await db.sequelize.sync();
    console.log("bd sincronizada!");
}).catch(err => {
    console.log(err);
    process.exit();
})