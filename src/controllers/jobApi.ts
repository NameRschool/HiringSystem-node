import { Request, Response } from 'express';
import jobService from '../services/jobServices';
import { jobType } from '../models/typeInterface';
import { validateEntityExistence } from '../lib/validationsFunc';
import { validateEntityNotExistence } from '../lib/validationsFunc';
import { v4 as uuidv4 } from 'uuid';

class JobApi {
  async get(req: Request, res: Response): Promise<void> {
    try {
      const jobs = await jobService.getAll();
      console.log('Retrieved jobs:',jobs);
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
      await validateEntityExistence(jobService,_id,'jobs',res);
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
    const { name, location, jobDescription, companyDescription, requierments, candidatesList }: jobType = req.body;
    try {
      await validateEntityNotExistence(jobService,_id,'jobs',res)
      await jobService.create({ _id, name, status, date, location, jobDescription, companyDescription, requierments,candidatesList });
      res.json(`job saved successfully- ${name}`);
    } catch (error) {
      console.error('Failed to retrieve job', error);
      res.status(500).json({ error: 'Failed to retrieve job' });
    }
  }

  async updateById(req: Request, res: Response) {
    const { _id } = req.params;
    try {
      await validateEntityExistence(jobService,_id,'jobs',res);
      const job = await jobService.updateById(_id, req.body);
      if (!job) {
        return res.status(404).json({ error: 'Failed to update job' });
      }
      res.json(`job update saved successfully- ${req.body}`);
    } catch (error) {
      console.error('Failed to update job', error);
      res.status(500).json({ error: 'Failed to update job' });
    }
  }

  async deleteById(req: Request, res: Response) {
    const { _id } = req.params;
    try {
      await validateEntityExistence(jobService,_id,'jobs',res);
      await jobService.deleteById(_id);
      res.json(`job deleted successfully`);

    } catch (error) {
      console.error('Failed to retrieve job', error);
      res.status(500).json({ error: 'Failed to retrieve job' });
    }
  }
}
export default new JobApi();

