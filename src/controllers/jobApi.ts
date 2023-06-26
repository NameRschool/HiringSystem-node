import { Request, Response } from 'express';

const jobService=require('../services/jobServices');

 function get(): Promise<void> => {
  try {
    const campaigns = await jobService.getAll();
    console.log('Retrieved campaigns:', campaigns);
    .json(campaigns);
  } catch (error) {
    console.error('Failed to retrieve campaigns', error);
    res.status(500).json({ error: 'Failed to retrieve campaigns' });
  }
});
export default get;