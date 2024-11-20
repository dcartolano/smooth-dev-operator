import { Question } from '../models/index.js';

const cleanDB = async (): Promise<void> => {
  try {
    await Question.deleteMany({});
    console.log('Question colleciton cleaned');
  }
  catch (err) {
    console.error('Error cleaning collections:', err);
    process.exit();
  }
}

export default cleanDB;
