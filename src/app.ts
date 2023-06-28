import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express, { Request, Response, NextFunction } from "express";
import jobRouter from './routers/jobsRouter';
import cors from 'cors';
dotenv.config();

const port = process.env.PORT || 3005;
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
// app.get('/api/data', (req: Request, res: Response) => {
//   const data = {
//     message: 'Hello from the server!',
//   };
//   res.json(data);
// });
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });
