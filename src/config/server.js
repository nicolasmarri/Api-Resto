const config = {
    SERVER_PORT: process.env.PORT || 3000,
    DDBB: {
        NAME: 'sql10346493',
        USER: 'sql10346493',
        PASS: 'hYKRF4fRwi',
        PORT: '3306',
        HOST: 'sql10.freemysqlhosting.net'
    },
    JWT: {
        PRIVATE_KEY: 'resto',
        EXPIRES_TIME: 10
    }
}

module.exports = config