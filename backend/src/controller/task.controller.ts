import { Request, Response } from "express";
import { createService, getAllService } from "../service/task.service";

export const create = async (req: Request, res: Response) => {
  const { title, done } = req.body;
  const task = await createService(title, done);
  return res.status(201).json(task);
};

export const getAll = async (_req: Request, res: Response) => {
  const tasks = await getAllService();
  return res.status(200).json(tasks);
}

