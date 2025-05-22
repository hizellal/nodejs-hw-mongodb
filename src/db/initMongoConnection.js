import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongoConnection = async () => {
  const user = getEnvVar('MONGODB_USER');
  const pwd = getEnvVar('MONGODB_PASSWORD');
  const url = getEnvVar('MONGODB_URL');
  const db = getEnvVar('MONGODB_DB');
  try {
    await mongoose.connect(
      //mongodb+srv://student112:V6997dcv8UFM@cluster0.wqhj82g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`,
      //{ serverSelectionTimeoutMS: 30000 },
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log(error);
    throw error;
  }
};