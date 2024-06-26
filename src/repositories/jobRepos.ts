const db = require('../models/db');
import Job from '../models/jobsSchema';
import { jobType } from '../models/typeInterface';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';


class JobRepo {
  constructor() {
    db.connect();
  }

  async getAll(): Promise<jobType[] | void> {
    try {
      return await Job.find({});
    } catch (error) {
      console.error(`error:${error}`)
    }
  }

  async getById(_id: String | ParamsDictionary | ParsedQs): Promise<jobType | void | null> {
    try {
      return await Job.findById({ _id });
    } catch (error) {
      console.error(`error:${error}`)
    }
  }

  async create(newJob: jobType): Promise<void | null> {
    try {
      await Job.create(newJob);
    } catch (error) {
      console.error(`error:${error}`)
    }
  }

  async deleteById(id: string | ParamsDictionary): Promise<void | null> {
    try {
      await Job.findByIdAndRemove(id);
    } catch (error) {
      console.error(`error:${error}`)
    }
  }

  async updateById(id: string | ParamsDictionary, props: any): Promise<void | null> {
    try {
     return await Job.findByIdAndUpdate(id, props);
    } catch (error) {
      console.error(`error:${error}`)
    }
  }

}

export default new JobRepo();