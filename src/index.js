const app = require('./app/app');
const config = require('./config/server');
const dbConnection = require('./app/db.conection');

dbConnection
        .authenticate()
        .then(() => app.listen(config.SERVER_PORT, () => { }))
        .then(() => console.log('connected'))
        .catch(err => console.error('Unable to connect to the database:', err))
