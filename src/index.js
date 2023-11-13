import app from "./app.js";
import { connectDb } from "./config/db.js";

async function main() {
  try {
    await connectDb();
    app.listen(PORT);
    console.log(`Listening on port http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();