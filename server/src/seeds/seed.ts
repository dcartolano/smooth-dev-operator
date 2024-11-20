import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";

import pythonQuestions from './pythonQuestions.json' assert { type: "json" };

try {
  await db();
  await cleanDB();

  //bulk create each model
  await Question.insertMany(pythonQuestions);

  console.log('Sedding completed successfully');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database: ', error);
  process.exit(1);
}
