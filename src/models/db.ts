import mongoose,{ ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
//const databaseUrl = process.env.DATABASE_URL as string;
const connect = async () => {
   
    await mongoose.connect('mongodb+srv://rf:MYpasswordDB@homecluster.dfm7sgf.mongodb.net/hiringSystem',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log('Connected to MongoDB');
 
};

const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Failed to disconnect from MongoDB', error);
    throw error;
  }
};


export { connect, disconnect };