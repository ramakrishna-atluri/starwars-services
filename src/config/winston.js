const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format

// Setting the out put path for Log File
let logPath = 'public/log/'
if (process.env.NODE_LOG_PATH && process.env.NODE_LOG_PATH !== '') {
  logPath = process.env.NODE_LOG_PATH
}

// Setting the format for log messages
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'SWS' }),
    timestamp(),
    myFormat
  ),
  defaultMeta: { service: 'starwars-service' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({ filename: logPath + 'error.log', level: 'error' }),
    new transports.File({ filename: logPath + 'log/combined.log' })
  ]
})

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple()
  }))
}

module.exports = logger
