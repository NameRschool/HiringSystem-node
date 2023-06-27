import { Request, Response } from 'express';
import jobService from '../services/jobServices';
import { jobType } from '../models/typeInterface';
const { v4: uuidv4 } = require('uuid');

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
    const { _id } = req.params;
    try {
      const jobId = await jobService.getById(_id);
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
    const { name, location, jobDescription, companyDescription, requierments }: jobType = req.body;
    try {
      const jobId = await jobService.getById(_id);
      if (jobId) {
        console.error('job with the provided ID already exists');
        return res.status(404).json({ error: 'The id is in use' });
      }
      const createdJob = await jobService.create({ _id, name, status, date, location, jobDescription, companyDescription, requierments });
      res.json(`job saved successfully- ${name}`);
    } catch (error) {
      console.error('Failed to retrieve job', error);
      res.status(500).json({ error: 'Failed to retrieve job' });
    }
  }


  async updateById(req: Request, res: Response) {
    const { _id } = req.params;
    try {
      const existingJob = await jobService.getById(_id);
      if (!existingJob) {
        return res.status(404).json({ error: 'Job not found' });
      }

      const updatedJob = { ...existingJob, ...req.body };
      const job = await jobService.updateById(_id, {updatedJob});
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
      const jobId = jobService.getById(_id);
      if (!jobId) {
        return res.status(404).json({ error: 'The id is in use' });
      }
      const job = await jobService.deleteById(_id);
      res.json(`job deleted successfully`);

    } catch (error) {
      console.error('Failed to retrieve job', error);
      res.status(500).json({ error: 'Failed to retrieve job' });
    }
  }
}
export default new JobApi();

