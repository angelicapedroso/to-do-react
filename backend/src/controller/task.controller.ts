import { Request, Response } from 'express';
import {
  createService, getAllService, updateService, deleteService,
} from '../service/task.service';
import HttpException from '../share/http.exception';

export const create = async (req: Request, res: Response): Promise<Response> => {
  const task = await createService(req.body);
  return res.status(201).json(task);
};

export const getAll = async (_req: Request, res: Response) => {
  const tasks = await getAllService();
  return res.status(200).json(tasks);
};

export const update = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const task = await updateService(Number(id), req.body);
  return res.status(200).json(task);
};

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteService(Number(id));
  return res.status(201).json({ message: 'Tarefa excluída com sucesso' });
};