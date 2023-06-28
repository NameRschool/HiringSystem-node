import mongoose, { Schema } from "mongoose"
import { candidatesType } from './typeInterface';

const candidatesSchema = new Schema<candidatesType>({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    tel: { type: String, required: true },
    email: { type: String, required: true },
    info: { type:String, required: false }

});
export default mongoose.model<candidatesType>("candidates", candidatesSchema)