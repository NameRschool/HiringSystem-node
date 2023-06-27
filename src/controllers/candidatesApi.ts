import { Request, Response } from 'express';
import candidatesServices from '../services/candidatesServices';
import { candidatesType } from '../models/typeInterface';
const { v4: uuidv4 } = require('uuid');

class CandidatesApi{
    async get(req: Request, res: Response): Promise<void> {
        try {
          const jobs = await candidatesServices.getAll();
          console.log('Retrieved jobs:', jobs);
          res.json(jobs);
        } catch (error) {
          console.error('Failed to retrieve jobs', error);
          res.status(500).json({ error: 'Failed to retrieve jobs' });
        }
      }
    
      async getById(req: Request, res: Response): Promise<void> {
        const { _id } = req.params;
        try {
          const jobId = await candidatesServices.getById(_id);
          if (!jobId) {
            res.status(404).json({ error: 'the id does not exist' });
          }
          res.json(jobId);
        } catch (error) {
          console.error('Failed to retrieve job', error);
          res.status(500).json({ error: 'Failed to retrieve job' });
        }
      }
    
      async create(req: Request, res: Response) {
        const _id = uuidv4();
        const status = true;
        const date = new Date();
        const { name, location, jobDescription, companyDescription, requierments }: candidatesType = req.body;
        try {
          const jobId = await candidatesServices.getById(_id);
          if (jobId) {
            console.error('job with the provided ID already exists');
            return res.status(404).json({ error: 'The id is in use' });
          }
          const createdJob = await candidatesServices.create({ _id, name, status, date, location, jobDescription, companyDescription, requierments });
          res.json(`job saved successfully- ${name}`);
        } catch (error) {
          console.error('Failed to retrieve job', error);
          res.status(500).json({ error: 'Failed to retrieve job' });
        }
      }
    
    
      async updateById(req: Request, res: Response) {
        const { _id } = req.params;
        try {
          const existingJob = await candidatesServices.getById(_id);
          if (!existingJob) {
            return res.status(404).json({ error: 'Job not found' });
          }
    
          const updatedJob = { ...existingJob, ...req.body };
          const job = await candidatesServices.updateById(_id, {updatedJob});
          if (!job) {
            return res.status(404).json({ error: 'Failed to update job' });
          }
          res.json(job);
        } catch (error) {
          console.error('Failed to update job', error);
          res.status(500).json({ error: 'Failed to update job' });
        }
      }
    
    
      async deleteById(req: Request, res: Response) {
        const { _id } = req.params;
        try {
          const jobId = candidatesServices.getById(_id);
          if (!jobId) {
            return res.status(404).json({ error: 'The id is in use' });
          }
          const job = await candidatesServices.deleteById(_id);
          res.json(`job deleted successfully`);
    
        } catch (error) {
          console.error('Failed to retrieve job', error);
          res.status(500).json({ error: 'Failed to retrieve job' });
        }
      }
}
export default new CandidatesApi();
