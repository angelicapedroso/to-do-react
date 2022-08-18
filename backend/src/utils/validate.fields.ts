import HttpException from '../share/http.exception';

const isValidTitle = (title: string): void => {
  if (!title) throw new HttpException(400, 'O campo "title" é obrigatório');
  if (typeof title !== 'string') throw new HttpException(400, 'O campo "title" espera uma string');
};

export default isValidTitle;
