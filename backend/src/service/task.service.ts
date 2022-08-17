import prisma from '../prisma';
import HttpException from '../share/http.exception';

const isValidTitle = (title: string): Boolean => {
  if (!title || typeof title !== 'string') return false;
  return true;
};

export const createService = async (title: string, done: boolean): Promise<object> => {
  if (!isValidTitle(title)) {
    throw new HttpException(400, 'Formato inválido');
  }
  const task = await prisma.task.create({
    data: { title, done },
  });
  return task;
};

export const getAllService = async (): Promise<object> => {
  const tasks = await prisma.task.findMany();
  return tasks;
};

export const updateService = async (id: number, title: string, done: boolean): Promise<object> => {
  const task = await prisma.task.update({
    where: { id },
    data: { title, done },
  });
  return task;
};

export const deleteService = async (id: number): Promise<void> => {
  await prisma.task.delete({ where: { id } });
};
