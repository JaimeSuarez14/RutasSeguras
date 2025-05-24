import express from 'express';
import {PORT} from './server.js';
import userRouter from './routes/users.routes.js';

const app = express();

app.use(userRouter);


app.listen(PORT, () => {
  console.log('Server is running on port '+PORT);
});