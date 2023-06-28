import { Request, Response } from 'express';
import candidatesServices from '../services/candidatesServices';
import { candidatesType } from '../models/typeInterface';
import { v4 as uuidv4 } from 'uuid';
import { validateEntityExistence } from '../lib/validationsFunc';
import { validateEntityNotExistence } from '../lib/validationsFunc';


class CandidatesApi {
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
            await validateEntityExistence(candidatesServices, _id, 'candidates', res);

            res.json(candidatesId);
        } catch (error) {
            console.error('Failed to retrieve candidates', error);
            res.status(500).json({ error: 'Failed to retrieve candidates' });
        }
    }

    async create(req: Request, res: Response) {
        const _id = uuidv4();
        const { name, tel, email, info }: candidatesType = req.body;
        try {
            await validateEntityNotExistence(candidatesServices, _id, 'candidates', res)
            await candidatesServices.create({ _id, name, tel, email, info });
            res.json(`candidates saved successfully- ${name}`);
        } catch (error) {
            console.error('Failed to retrieve candidates', error);
            res.status(500).json({ error: 'Failed to retrieve candidates' });
        }
    }

    async updateById(req: Request, res: Response) {
        const { _id } = req.params;
        try {
            await validateEntityExistence(candidatesServices,_id,'candidates',res);
            const Candidates = await candidatesServices.updateById(_id, req.body);
            if (!Candidates) {
                return res.status(404).json({ error: 'Failed to update Candidates' });
            }
            res.json(`Candidates update saved successfully- ${req.body}`);
        } catch (error) {
            console.error('Failed to update candidates', error);
            res.status(500).json({ error: 'Failed to update candidates' });
        }
    }

    async deleteById(req: Request, res: Response) {
        const { _id } = req.params;
        try {
            await validateEntityExistence(candidatesServices,_id,'candidates',res);
            await candidatesServices.deleteById(_id);
            res.json(`Candidates deleted successfully`);

        } catch (error) {
            console.error('Failed to retrieve Candidates', error);
            res.status(500).json({ error: 'Failed to retrieve Candidates' });
        }
    }
}
export default new CandidatesApi();
