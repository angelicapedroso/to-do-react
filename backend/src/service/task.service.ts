import { ITask } from '../interface/task.interface';
import prisma from '../prisma';
import HttpException from '../share/http.exception';
import isValidTitle from '../utils/validate.fields';

export const createService = async (task: ITask): Promise<ITask> => {
  isValidTitle(task.title);
  const result = await prisma.task.create({ data: task });
  return result;
};

export const getAllService = async (): Promise<object> => {
  const tasks = await prisma.task.findMany();
  return tasks;
};

export const updateService = async (id: number, task: ITask): Promise<ITask> => {
  const result = await prisma.task.update({ where: { id }, data: task });
  return result;
};

export const deleteService = async (id: number): Promise<void> => {
  await prisma.task.delete({ where: { id } });
};
