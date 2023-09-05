
class APILogger {


    info(message) {
        console.log(`API: ${message}`);
    }

    debug(message, data) {
        if(process.env.IS_DEBUG_ENABLED === 'true') {
            console.log(`API: ${message} and data ${JSON.stringify(data)}`)
        }
    }

    error(err) {
        console.error(`API Error : ${err}`)
    }
}


module.exports = new APILogger()