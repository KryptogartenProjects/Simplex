const dotenv  = require('dotenv').config();

module.exports  = {
    appName     : process.env.APP_NAME,
    hostname    : process.env.HOST_NAME,
    port        : process.env.PORT,
    swaggerFile : process.env.SWAGGER_FILE, 
    logFile     : process.env.LOG_FILE, 
    dataFile    : process.env.DATA_FILE
};