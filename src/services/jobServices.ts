import jobRepo from '../repositories/jobRepos';
import { ParamsDictionary } from 'express-serve-static-core';
import { jobType } from '../models/typeInterfaceJob';

//BL
class JobService {
    async getAll() {
        return await jobRepo.getAll();
    }

    async getById(id: string | ParamsDictionary) {
        return await jobRepo.getById(id);
    }
    async deleteById(id: string | ParamsDictionary): Promise<void | null> {
        await jobRepo.deleteById(id);
    }
    async create(newJob: jobType): Promise<void | null> {
        await jobRepo.create(newJob);
    }
    async updateById(id: string | ParamsDictionary, props: any): Promise<void | null> {
        await jobRepo.updateById(id, props);
    }

}

export default new JobService();