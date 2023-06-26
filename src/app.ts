import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { connect } from './models/db';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response): void => {
  res.send('HI HIRING SYSTER SITE!');
});

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`I am up in http://127.0.0.1:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error('Failed to connect to MongoDB', error);
  });
