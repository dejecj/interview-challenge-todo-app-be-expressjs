import express from 'express';
import env from './env';
import { logger, pinoInstance } from './middlewares/logger';
import errorHandler from './middlewares/error';
import tasks from './routes/tasks/tasks.index';
import cors from 'cors';

const routes = [
  tasks,
];

const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(logger());
routes.forEach((route) => {
  app.use(route);
});
app.use((_, res) => {
    res.status(404).json({
      message: "Resource not found",
    });
});
app.use(errorHandler);
app.listen(env.PORT, () => {
  return pinoInstance.info(`Express is listening at http://localhost:${env.PORT}`);
});
