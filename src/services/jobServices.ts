const jobRepo = require('../repository/jobRepos');
//BL
class JobService {
    async getAll() {
        return await jobRepo.getAll();
    }
    // async createGroup(groupData) {
    //     return await jobRepo.createGroup(groupData);
    //   }
}

module.exports = new JobService();