import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import httpErrorMiddleware from './middleware/http.error.middleware';
import taskRoutes from './routes/task.routes';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/task', taskRoutes);

app.use(httpErrorMiddleware);

export default app;
