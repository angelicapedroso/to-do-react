import app from './app';

const PORT = process.env.PORT || 3002;

const server = app.listen(PORT);

export default server;
