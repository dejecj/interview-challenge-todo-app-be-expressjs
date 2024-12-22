import { NextFunction, Request, Response } from "express";
import { CreateTaskRequest, GetTaskRequest, UpdateTaskRequest, DeleteTaskRequest } from "./tasks.routes";
import { PrismaClient} from '@prisma/client';

const db = new PrismaClient();

export const createTaskHandler = async(req: Request<any, any, CreateTaskRequest['body']>, res: Response, next: NextFunction) => {
  const { title, color, completed } = req.body;
  const newTask = await db.task.create({
    data: {
      title,
      color,
      completed
    }
  });

  if(!newTask){
    next(new Error('Failed to create new task'));
    return;
  }
  res.json({ message: "Task created", data: newTask });
};

export const getTaskHandler = async (req: Request<GetTaskRequest['params']>, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const task = await db.task.findFirst({
    where: {id}
  });
  req.log.debug(task);
  if(!task){
    res.status(404).json({success: false, message: 'Resource not found'});
    return;
  }
  res.json({ success: true, data: task });
};

export const listTaskHandler = async (req: Request, res: Response, next: NextFunction) => {
  const tasks = await db.task.findMany();
  req.log.debug(tasks);
  res.json({ success:true, data: tasks });
};

export const updateTaskHandler = async(req: Request<UpdateTaskRequest['params'], any, UpdateTaskRequest['body']>, res: Response, next: NextFunction) => {
  const { title, color, completed } = req.body;
  req.log.debug(req.body);
  const { id } = req.params;
  const newTask = await db.task.update({
    where: {id},
    data: {
      title,
      color,
      completed
    }
  });

  if(!newTask){
    next(new Error('Failed to update task'));
    return;
  }
  res.json({ message: "Task updated", data: newTask });
};

export const deleteTaskHandler = async(req: Request<DeleteTaskRequest['params']>, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const newTask = await db.task.delete({
    where: {id}
  });

  if(!newTask){
    next(new Error('Failed to delete task'));
    return;
  }
  res.json({ message: "Task deleted", data: {id} });
};