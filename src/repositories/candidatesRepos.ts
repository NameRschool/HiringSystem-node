const db = require('../models/db');
import Candidates from '../models/candidatesSchema';
import { candidatesType } from '../models/typeInterface';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';


class CandidatesRepo {
  constructor() {
    db.connect();
  }

  async getAll(): Promise<candidatesType[] | void> {
    try {
      return await Candidates.find({});
    } catch (error) {
      console.error(`error:${error}`)
    }
  }

  async getById(_id: String | ParamsDictionary | ParsedQs): Promise<candidatesType | void | null> {
    try {
      return await Candidates.findById({ _id });
    } catch (error) {
      console.error(`error:${error}`)
    }
  }

  async create(newJob: candidatesType): Promise<void | null> {
    try {
      await Candidates.create(newJob);
    } catch (error) {
      console.error(`error:${error}`)
    }
  }

  async deleteById(id: string | ParamsDictionary): Promise<void | null> {
    try {
      await Candidates.findByIdAndRemove(id);
    } catch (error) {
      console.error(`error:${error}`)
    }
  }

  async updateById(id: string | ParamsDictionary, props: any): Promise<void | null> {
    try {
     return await Candidates.findByIdAndUpdate(id, props);
    } catch (error) {
      console.error(`error:${error}`)
    }
  }

}

export default new CandidatesRepo();