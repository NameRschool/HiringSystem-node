import jobRepo from '../repositories/jobRepos';
import { ParamsDictionary } from 'express-serve-static-core';
import { jobType } from '../models/typeInterface';
import { ParsedQs } from 'qs';
//BL
class JobService {
    async getAll(): Promise<jobType[] | void>  {
        try{
            return await jobRepo.getAll();
        }catch(error){
            console.error(`error:${error}`)
        }
    }

    async getById(_id: String| ParamsDictionary| ParsedQs): Promise<jobType | void | null> {
        try{
            return await jobRepo.getById(_id);
        }catch(error){
            console.error(`error:${error}`)
        }
    }
    async deleteById(id: string| ParamsDictionary): Promise<void | null> {
        try{
            await jobRepo.deleteById(id);
        }catch(error){
            console.error(`error:${error}`)
        }
    }
    async create(newJob: jobType): Promise<void | null> {
        try{
            await jobRepo.create(newJob);
        }catch(error){
            console.error(`error:${error}`)
        }
    }
    async updateById(id: string | ParamsDictionary, props: any): Promise<void | null> {
        try{
          return  await jobRepo.updateById(id, props);
        }catch(error){
            console.error(`error:${error}`)
        }
    }

}

export default new JobService();