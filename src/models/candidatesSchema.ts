import mongoose, { Schema } from "mongoose"
import { candidatesType } from './typeInterface';

const candidatesSchema = new Schema<candidatesType>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  status: { type: Boolean, required: true },
  date: { type: Date, required: false },
  location: { type: String, require: false },
  jobDescription: { type: String,require: true },
  companyDescription: { type: String, require: false },
  requierments: { type: [String], require: true }

});
export default mongoose.model<candidatesType>("candidates", candidatesSchema)