import express from 'express';

const app = express();
app.use(express.json());

app.listen(3002, () => {
  console.log('Back-end started in 3002 port!');
});
