import mongoose, { Schema } from "mongoose"
import { jobType } from './typeInterface';

const jobSchema = new Schema<jobType>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: Boolean, required: true },
  date: { type: Date, required: false },
  location: { type: String, require: false },
  jobDescription: { type: String,require: true },
  companyDescription: { type: String, require: false },
  requierments: { type: [String], require: true }

});
export default mongoose.model<jobType>("jobs", jobSchema)