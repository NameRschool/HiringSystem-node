import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express, { Request, Response, NextFunction } from "express";
import jobRouter from './routers/jobsRouter';
import candidatesRouter from './routers/candidatesRouter'
import cors from 'cors';
dotenv.config();

const port = process.env.PORT || 3002;
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200,
  })
);
app.get('/', (req: Request, res: Response): void => {
  res.send('HI HIRING SYSTER SITE!');
});
app.use(jobRouter);
app.use(candidatesRouter)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).json({ error: 'Invalid JSON' });
  } else {
    next(err);
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(port, () => {
  console.log(`I am up in http://127.0.0.1:${port}`);
});

