import prisma from "../prisma";

export const createService = async (title: string, done: boolean) => {
  const task = await prisma.task.create({
    data: { title, done }
  })
  return task;
};

export const getAllService = async () => {
  const tasks = await prisma.task.findMany();
  return tasks;
};
