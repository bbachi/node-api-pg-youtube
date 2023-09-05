const pino = require('pino');
const transport = pino.transport({
    target: 'pino-pretty',
    options: { destination: 1 } // use 2 for stderr
})
const logger = pino(transport);

class APILogger {


    info(message) {
        logger.info(`API: ${message}`);
    }

    debug(message, data) {
        if(process.env.IS_DEBUG_ENABLED === 'true') {
            logger.info(`API: ${message} and data ${JSON.stringify(data)}`)
        }
    }

    error(err) {
        logger.error(`API Error : ${err}`)
    }
}


module.exports = new APILogger()