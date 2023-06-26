import { Request, Response } from 'express';
import jobService from '../services/jobServices'; 
import  {jobType}  from '../models/typeInterfaceJob';

class JobApi {
  async get(req: Request, res: Response): Promise<void> {
    try {
      const jobs = await jobService.getAll();
      console.log('Retrieved jobs:', jobs);
      res.json(jobs);
    } catch (error) {
      console.error('Failed to retrieve jobs', error);
      res.status(500).json({ error: 'Failed to retrieve jobs' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const jobId = await jobService.getById(id);
      // if (jobId) {
      //      res.status(404).json({ error: 'job not found' });
      // }
      res.json(jobId);
    } catch (error) {
      console.error('Failed to retrieve job', error);
      res.status(500).json({ error: 'Failed to retrieve job' });
    }
  }
  async create(req: Request, res: Response){
    const newJob:jobType=req.body;
    const id=req.body.id;
    try{
      const jobId = jobService.getById(id);
      // if (jobId) {
      //     return res.status(404).json({ error: 'The id is in use' });
      // }
      const job= await jobService.create(newJob);
      res.json(job);

    }catch(error){
      console.error('Failed to retrieve job', error);
      res.status(500).json({ error: 'Failed to retrieve job' });
    }
  }

  async updateById(req: Request, res: Response){
    const newJob:jobType=req.body;
    const id=req.body.id;
    try{
      const jobId = jobService.updateById(id,newJob);
      // if (jobId) {
      //     return res.status(404).json({ error: 'The id is in use' });
      // }
      res.json(jobId);

    }catch(error){
      console.error('Failed to retrieve job', error);
      res.status(500).json({ error: 'Failed to retrieve job' });
    }
  }

  async deleteById(req: Request, res: Response){
    const id=req.params;
    try{
      const jobId = jobService.getById(id);
      if (!jobId) {
          return res.status(404).json({ error: 'The id is in use' });
      }
      const job= await jobService.deleteById(id);
      res.json(job);

    }catch(error){
      console.error('Failed to retrieve job', error);
      res.status(500).json({ error: 'Failed to retrieve job' });
    }
  }
}
export default new JobApi();

