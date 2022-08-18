import prisma from '../prisma';
import { ITask } from '../interface/task.interface';
import isValidTitle from '../validation/task.validation';

export const create = async (task: ITask): Promise<ITask> => {
  isValidTitle(task.title);
  const result = await prisma.task.create({ data: task });
  return result;
};

export const getAll = async (): Promise<Array<ITask>> => {
  const result = await prisma.task.findMany();
  return result;
};

export const update = async (id: number, task: ITask): Promise<ITask> => {
  const result = await prisma.task.update({ where: { id }, data: task });
  return result;
};

export const destroy = async (id: number): Promise<void> => {
  await prisma.task.delete({ where: { id } });
};
