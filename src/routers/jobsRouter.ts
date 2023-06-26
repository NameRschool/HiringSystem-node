import express from 'express';
const jobRouter = express.Router();
import JobApi from '../controllers/jobApi';

jobRouter.get('/api/jobs', JobApi.get);
jobRouter.get('/api/jobs/:id', JobApi.getById)
jobRouter.post('/api/jobs', JobApi.create)
jobRouter.delete('/api/jobs/:id', JobApi.deleteById)
jobRouter.put('/api/jobs/:id', JobApi.updateById)

export default jobRouter;
