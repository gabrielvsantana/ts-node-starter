import pino from 'pino';

const loggerConfig: pino.LoggerOptions = { enabled: true, name: 'node-project' };

if (process.env.LOG_PRETTY) loggerConfig.transport = { target: 'pino-pretty' };

export const logger = pino(loggerConfig);
