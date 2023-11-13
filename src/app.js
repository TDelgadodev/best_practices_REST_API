import express from "express";
import apicache from "apicache";

import { swaggerDocs } from "./v1/swagger.mjs";
/* import v1WorkoutRouter from "./v1/routes/workoutRoutes.mjs";
 */
const app = express();
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

app.use(express.json());
app.use(cache("3 minutes"));
/* app.use("/api/v1/workouts", v1WorkoutRouter);
 */
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  swaggerDocs(app, PORT);
});

export default app