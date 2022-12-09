const {devLogger, prodLogger} = require('./Loggers')
require("dotenv").config()
const env = process.env.NODE_ENV
let Logger = null;

if (env === "dev") {
      Logger = devLogger()
}else{
      Logger = prodLogger()
}

module.export = Logger

Logger.error(new Error('SERVER:something went wrong'))
Logger.warn('SERVER:something went wrong')
Logger.info('SERVER:something went wrong')
//Logger.debug('SERVER:something went wrong')

// (error: 0,
//     warn:1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug:5,
//     silly: 6)