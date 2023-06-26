import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { connect } from './models/db';
import jobRouter from './routers/jobsRouter';
dotenv.config();

const port = process.env.PORT || 3005;
const app = express();
app.use(bodyParser.json());
app.use(jobRouter);
app.get('/', (req: Request, res: Response): void => {
  res.send('HI HIRING SYSTER SITE!');
});


    app.listen(port, () => {
      console.log(`I am up in http://127.0.0.1:${port}`);
    });


