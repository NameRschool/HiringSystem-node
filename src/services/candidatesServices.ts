import candidatesRepos from '../repositories/candidatesRepos';
import { ParamsDictionary } from 'express-serve-static-core';
import { candidatesType } from '../models/typeInterface';
import { ParsedQs } from 'qs';
//BL
class CandidatesService {
    async getAll(): Promise<candidatesType[] | void>  {
        try{
            return await candidatesRepos.getAll();
        }catch(error){
            console.error(`error:${error}`)
        }
    }

    async getById(_id: String| ParamsDictionary| ParsedQs): Promise<candidatesType | void | null> {
        try{
            return await candidatesRepos.getById(_id);
        }catch(error){
            console.error(`error:${error}`)
        }
    }
    async deleteById(id: string| ParamsDictionary): Promise<void | null> {
        try{
            await candidatesRepos.deleteById(id);
        }catch(error){
            console.error(`error:${error}`)
        }
    }
    async create(newJob: candidatesType): Promise<void | null> {
        try{
            await candidatesRepos.create(newJob);
        }catch(error){
            console.error(`error:${error}`)
        }
    }
    async updateById(id: string | ParamsDictionary, props: any): Promise<void | null> {
        try{
          return  await candidatesRepos.updateById(id, props);
        }catch(error){
            console.error(`error:${error}`)
        }
    }

}

export default new CandidatesService();