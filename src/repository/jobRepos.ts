const db = require('../models/db');
const job = require('../models/jobsSchema');

interface jobType {
  _id: string;
  name: string;
}

class JobRepo {
  constructor() {
    db.connect();
  }

  async  getAll(): Promise<jobType[]> {
    return await job.find({});
  }
  
  // async function getById(): Promise<jobType[]> {
  //   return await job.find({ age: 5 });
  // }
  
  // async function createJob(groupData: GroupData): Promise<GroupType> {
  //   try {
  //     const job = new Job(groupData);
  
  //     const savedJob = await job.save();
  
  //     return savedJob;
  //   } catch (error) {
  //     console.error('Failed to create group', error);
  //     throw error;
  //   }
  // }
  

}

module.exports = new JobRepo();