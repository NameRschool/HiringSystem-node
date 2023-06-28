import express, { Request, Response, NextFunction } from "express";
const jobRouter = express.Router();
import JobApi from '../controllers/jobApi';

jobRouter.get('/api/jobs', JobApi.get);
jobRouter.get('/api/jobs/:_id', JobApi.getById)
jobRouter.post('/api/jobs', JobApi.create)
jobRouter.delete('/api/jobs/:_id', JobApi.deleteById)
jobRouter.put('/api/jobs/:_id', (req: Request, res: Response) => {
    JobApi.updateById(req, res);
  });
  
export default jobRouter;
