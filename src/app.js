import express from "express";
import apicache from "apicache";

import { swaggerDocs } from "./v2/swagger.mjs";
import v2WorkoutRouter from "./v2/routes/workoutRoutes.mjs";

const app = express();
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

app.use(express.json());
app.use(cache("3 minutes"));
app.use("/api/v2/workouts", v2WorkoutRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  swaggerDocs(app, PORT);
});

export default app