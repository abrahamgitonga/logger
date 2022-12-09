const {transports, info} = require('winston');
const winston = require('winston');
const {createLogger, format, transport} = winston;

const Logger = createLogger({
    format: format.simple(),
    transports: [
        new transports.Console()
    ]

}) 
Logger.error('SERVER:something went wrong')

// (error: 0,
//     warn:1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug:5,
//     silly: 6)