const {transports, info} = require('winston');
const winston = require('winston');
const {createLogger, format} = winston;
const {combine, colorize,timestamp,printf, errors} = format;

const logFormat = printf(({level, message, stack, timestamp})=>{
    return `[${timestamp}]: ${level} ${stack || message}`
});

module.exports={

    devLogger: ()=>{
        return createLogger({
            format: combine(
                    colorize(),
                    timestamp({format: 'YYYY-MM-DD HH:MM:SS'}),
                    errors({stack:true}),
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