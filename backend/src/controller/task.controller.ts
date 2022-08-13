import { Request, Response } from "express";
import { createService } from "../service/task.service";

export const create = async (req: Request, res: Response) => {
  const { title, done } = req.body;
  const task = await createService(title, done);
  return res.status(201).json(task);
};

