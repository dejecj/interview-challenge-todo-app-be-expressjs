import { Router } from "express";
import { z } from "zod";
import { createTaskHandler, deleteTaskHandler, getTaskHandler, listTaskHandler, updateTaskHandler } from "./tasks.handlers";
import validate from "../../middlewares/validate";

// Zod schemas for request validation
const createTaskSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    color: z.string(),
    completed: z.boolean().default(false)
  }),
});

const getTaskSchema = z.object({
  params: z.object({
    id: z.coerce.number().min(1),
  }),
});

const listTaskSchema = z.object({});

const updateTaskSchema = z.object({
  params: z.object({
    id: z.coerce.number().min(1),
  }),
  body: z.object({
    title: z.string().min(1).optional(),
    color: z.string().optional(),
    completed: z.boolean().optional()
  }),
});

const deleteTaskSchema = z.object({
  params: z.object({
    id: z.coerce.number().min(1),
  }),
});

// Define routes with validation
const router = Router();

router.post("/", validate(createTaskSchema), createTaskHandler);
router.get("/", validate(listTaskSchema), listTaskHandler);
router.get("/:id", validate(getTaskSchema), getTaskHandler);
router.put("/:id", validate(updateTaskSchema), updateTaskHandler);
router.delete("/:id", validate(updateTaskSchema), deleteTaskHandler);

export default router;

export type CreateTaskRequest = z.infer<typeof createTaskSchema>;
export type GetTaskRequest = z.infer<typeof getTaskSchema>;
export type ListTaskRequest = z.infer<typeof listTaskSchema>;
export type UpdateTaskRequest = z.infer<typeof updateTaskSchema>;
export type DeleteTaskRequest = z.infer<typeof deleteTaskSchema>;