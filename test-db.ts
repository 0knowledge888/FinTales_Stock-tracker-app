import { connectToDatabase } from './database/mongoose';

 async function main() {
  try {
    await connectToDatabase();
    console.log('Database connection successful!');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

main();
