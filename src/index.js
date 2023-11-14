import { connectDb } from "./config/db.js";
import dotenv from 'dotenv';
dotenv.config();

async function main() {
  try {
    await connectDb();
    console.log(`Listening on port http://localhost:${process.env.PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();