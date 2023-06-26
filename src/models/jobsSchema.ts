import mongoose, { Schema } from "mongoose"
interface IJob {
    _id: { $oid: string };
    identity: string;
    name: string;
    status: boolean;
    date: Date;
  }

  const jobSchema: Schema<IJob> = new Schema({
    identity: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: Boolean,required: true  },
    date: { type: Date, required: true },
  });
export default mongoose.model("jobs", jobSchema)