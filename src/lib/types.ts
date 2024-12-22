import { RequestHandler } from "express";
import { z } from "zod";

type InferType<T> = T extends z.ZodType ? z.infer<T> : T;

type TypedRequestSchema = {
  params?: z.ZodType | Record<string, any>;
  query?: z.ZodType | Record<string, any>;
  body?: z.ZodType | Record<string, any>;
};

export type TypedRequestHandler<T extends TypedRequestSchema> = RequestHandler<
  InferType<T["params"]>,
  any,
  InferType<T["body"]>,
  InferType<T["query"]>
>;