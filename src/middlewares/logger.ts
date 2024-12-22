import pino from "pino";
import pretty from "pino-pretty";
import PinoHttp from 'pino-http';
import crypto from "crypto";
import env from "../env";

export const pinoInstance = pino({
  level: env.LOG_LEVEL,
}, pino.multistream([
  { level: env.LOG_LEVEL, stream: env.NODE_ENV !== "production" ? pretty() : process.stdout },
]));

export function logger() {
    return PinoHttp({
        logger: pinoInstance.child({ module: "api" }),
        genReqId: () => crypto.randomUUID()
    })
}
