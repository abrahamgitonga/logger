const {transports, info} = require('winston');
const winston = require('winston');
const {createLogger, format, transport} = winston;
const {combine, colorize,timestamp,printf} = format;

const logFormat = printf(({level, message, timestamp})=>{
    return `[${timestamp}]: ${level} ${message}`
});

module.exports={

    devLogger: ()=>{
        return createLogger({
            format: combine(
                    colorize(),
                    timestamp({format: 'YYYY-MM-DD HH:MM:SS'}),
                    logFormat
            ),
            transports: [
                new transports.Console(),
                
            ]
        
        }) 



    },
    prodLogger: ()=>{
        return createLogger({
            format: combine(
                    timestamp({format: 'YYYY-MM-DD HH:MM:SS'}),
                    logFormat
            ),
            transports: [
                new transports.Console(),
                new transports.File({filename: "Logger/Log.txt"})
            ]
        
        }) 



    }


}