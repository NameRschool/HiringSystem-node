import express from 'express';
const candidatesRouter = express.Router();
import CandidatesApi from '../controllers/candidatesApi';

candidatesRouter.get('/api/candidates', CandidatesApi.get);
candidatesRouter.get('/api/candidates/:_id', CandidatesApi.getById)
candidatesRouter.post('/api/candidates', CandidatesApi.create)
candidatesRouter.delete('/api/candidates/:_id', CandidatesApi.deleteById)
candidatesRouter.put('/api/candidates/:_id', CandidatesApi.updateById)

export default candidatesRouter;
