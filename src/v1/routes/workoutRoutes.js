const express = require("express");
const apicache = require("apicache");
const {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  deleteOneWorkout,
  updateOneWorkout,
} = require("../../controllers/workoutController");
const { getRecordForWorkout } = require("../../controllers/recordController");

const router = express.Router();

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */
router
  .get("/", getAllWorkouts)
  .get("/:workoutId", getOneWorkout)
  .get("/:workoutId/record", getRecordForWorkout)
  .post("/", createNewWorkout)
  .patch("/:workoutId", updateOneWorkout)
  .delete("/:workoutId", deleteOneWorkout);

module.exports = router;
