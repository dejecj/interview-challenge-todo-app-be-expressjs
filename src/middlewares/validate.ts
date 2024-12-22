import { z } from "zod";
import { RequestHandler } from "express";

const validate = (schema: z.ZodTypeAny) => {
    const parse:RequestHandler = (req, _, next) => {
        try {
            const result = schema.parse({
                body: req.body,
                params: req.params,
                query: req.query,
            });
            req.body = result.body;
            req.params = result.params;
            req.query = result.query;
            return next();
        } catch(err){
            const error = new Error("Invalid request");
            return next(Object.assign(error, {data: JSON.parse(err.message)}));
        }
    };
    return parse;
}

export default validate;