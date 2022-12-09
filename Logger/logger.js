const {transports, info} = require('winston');
const winston = require('winston');
const {createLogger, format, transport} = winston;
const {combine, colorize,simple,json,prettyPrint,timestamp} = format;

const Logger = createLogger({
    format: combine(
            timestamp({format: 'YYYY-MM-DD HH:MM:SS'}),
            colorize(),
            simple()
    ),
    transports: [
        new transports.Console()
    ]

}) 
Logger.error('SERVER:something went wrong')
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