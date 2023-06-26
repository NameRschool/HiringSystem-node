const db = require('../models/db');
import { resolve4 } from 'dns/promises';
import Job from '../models/jobsSchema';
import  {jobType}  from '../models/typeInterfaceJob';
import { ParamsDictionary } from 'express-serve-static-core';


class JobRepo {
  constructor() {
    db.connect();
  }

  async  getAll(): Promise<jobType[]> {
    return await Job.find({});
  }
  
  async getById(id: string| ParamsDictionary): Promise<jobType | null> {
    try{
      return await Job.findById({id});
    }
    catch{
      return null
    }
  }

  async create(newJob:jobType):Promise< void |null> {
    try{
       await Job.create(newJob);
    }
    catch{
      return null
    }
  }
  
  async deleteById(id:string|ParamsDictionary):Promise<void|null> {
    try{
      await Job.findByIdAndRemove(id);
    }
    catch{
      return null
    }
  }

  async updateById(id:string|ParamsDictionary,props:any):Promise<void|null> {
    try{
      await Job.findByIdAndUpdate(id,props);
    }
    catch{
      return null
    }
  }

 
  

}

export default new JobRepo();