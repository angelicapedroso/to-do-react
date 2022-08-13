import express from 'express';
import httpErrorMiddleware from './middleware/http.error.middleware';
import taskRouter from './route/task.routes';

const app = express();

app.use(express.json());
app.use('/task', taskRouter);

app.use(httpErrorMiddleware);

export default app;
