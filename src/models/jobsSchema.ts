import mongoose, { Schema } from "mongoose"
import { jobType } from './typeInterface';


const jobSchema = new Schema<jobType>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: Boolean, required: true },
  date: { type: Date, required: true },
  location: { type: String, require: false },
  jobDescription: { type: String,require: false },
  companyDescription: { type: String, require: false },
  requierments: { type: [String], require: true },
  candidatesList: { type: [{ 
    candidatesId: String,
    rating: Number,
    cognitive: Number,
    personality: Number,
    reliability: Number,
    interview: Boolean,
    screeningCall: Boolean,
    task: Boolean,
    cv: String
  }], require: false },
});
export default mongoose.model<jobType>("jobs", jobSchema)