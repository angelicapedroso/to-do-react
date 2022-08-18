import { Request, Response } from 'express';
import * as service from '../service/task.service';

export const create = async (req: Request, res: Response): Promise<Response> => {
  const task = await service.create(req.body);
  return res.status(201).json(task);
};

export const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const tasks = await service.getAll();
  return res.status(200).json(tasks);
};

export const update = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const task = await service.update(Number(id), req.body);
  return res.status(200).json(task);
};

export const destroy = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  await service.destroy(Number(id));
  return res.status(204).end();
};
