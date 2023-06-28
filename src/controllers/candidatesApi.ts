import { Request, Response } from 'express';
import candidatesServices from '../services/candidatesServices';
import { candidatesType } from '../models/typeInterface';
const { v4: uuidv4 } = require('uuid');

class CandidatesApi{
    async get(req: Request, res: Response): Promise<void> {
        try {
          const candidates = await candidatesServices.getAll();
          console.log('Retrieved candidates:', candidates);
          res.json(candidates);
        } catch (error) {
          console.error('Failed to retrieve candidates', error);
          res.status(500).json({ error: 'Failed to retrieve candidates' });
        }
      }
    
      async getById(req: Request, res: Response): Promise<void> {
        const { _id } = req.params;
        try {
          const candidatesId = await candidatesServices.getById(_id);
          if (!candidatesId) {
            res.status(404).json({ error: 'the id does not exist' });
          }
          res.json(candidatesId);
        } catch (error) {
          console.error('Failed to retrieve candidates', error);
          res.status(500).json({ error: 'Failed to retrieve candidates' });
        }
      }
    
      async create(req: Request, res: Response) {
        const _id = uuidv4();
        const status = true;
        const date = new Date();
        const { name, location, jobDescription, companyDescription, requierments }: candidatesType = req.body;
        try {
          const candidatesId = await candidatesServices.getById(_id);
          if (candidatesId) {
            console.error('candidates with the provided ID already exists');
            return res.status(404).json({ error: 'The id is in use' });
          }
          await candidatesServices.create({ _id, name, status, date, location, jobDescription, companyDescription, requierments });
          res.json(`candidates saved successfully- ${name}`);
        } catch (error) {
          console.error('Failed to retrieve candidates', error);
          res.status(500).json({ error: 'Failed to retrieve candidates' });
        }
      }
    
    
      async updateById(req: Request, res: Response) {
        const { _id } = req.params;
        try {
          const existingCandidates = await candidatesServices.getById(_id);
          if (!existingCandidates) {
            return res.status(404).json({ error: 'Candidates not found' });
          }
    
          const Candidates = await candidatesServices.updateById(_id, req.body);
          if (!Candidates) {
            return res.status(404).json({ error: 'Failed to update Candidates' });
          }
          res.json(`Candidates update saved successfully- ${existingCandidates.name}`);
        } catch (error) {
          console.error('Failed to update candidates', error);
          res.status(500).json({ error: 'Failed to update candidates' });
        }
      }
    
    
      async deleteById(req: Request, res: Response) {
        const { _id } = req.params;
        try {
          const existingCandidates = candidatesServices.getById(_id);
          if (!existingCandidates) {
            return res.status(404).json({ error: 'The id does not exist' });
          }
          await candidatesServices.deleteById(_id);
          res.json(`Candidates deleted successfully`);
    
        } catch (error) {
          console.error('Failed to retrieve Candidates', error);
          res.status(500).json({ error: 'Failed to retrieve Candidates' });
        }
      }
}
export default new CandidatesApi();
