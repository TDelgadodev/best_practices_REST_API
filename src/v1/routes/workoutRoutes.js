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
const cache = apicache.middleware;

router
  .get("/", cache('3 minutes'), getAllWorkouts)
  .get("/:workoutId", getOneWorkout)
  .get("/:workoutId/record", getRecordForWorkout)
  .post("/", createNewWorkout)
  .patch("/:workoutId", updateOneWorkout)
  .delete("/:workoutId", deleteOneWorkout);

module.exports = router;
