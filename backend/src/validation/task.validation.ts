import HttpException from '../share/http.exception';

const isValidTitle = (title: string): void => {
  if (!title) throw new HttpException(400, 'The field "title" is required');
  if (typeof title !== 'string') throw new HttpException(400, 'The field "title" must be a string');
};

export default isValidTitle;
