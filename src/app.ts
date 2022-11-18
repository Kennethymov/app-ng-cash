import express, { Request, Response } from 'express';
import 'express-async-errors';
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';
import erroMiddleware from './middlewares/erroMiddleware';

const app = express();

app.use(express.json());
app.use(cors());

//app.use('/', userRoute)

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('TESTE NG.CASH')
});

app.use(erroMiddleware);


export default app;
