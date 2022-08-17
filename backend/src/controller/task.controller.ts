import { Request, Response } from 'express';
import {
  createService, getAllService, updateService, deleteService,
} from '../service/task.service';

export const create = async (req: Request, res: Response) => {
  const { title, done } = req.body;
  const task = await createService(title, done);
  return res.status(201).json(task);
};

export const getAll = async (_req: Request, res: Response) => {
  const tasks = await getAllService();
  return res.status(200).json(tasks);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, done } = req.body;
  const task = await updateService(Number(id), title, done);
  return res.status(200).json(task);
};

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteService(Number(id));
  return res.status(201).json({ message: 'Tarefa excluída com sucesso' });
};
