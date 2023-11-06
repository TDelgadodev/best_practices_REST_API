const express = require("express");
const {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  deleteOneWorkout,
  updateOneWorkout,
} = require("../../controllers/workoutController");
const { getRecordForWorkout } = require("../../controllers/recordController");
const router = express.Router();

router
  .get("/", getAllWorkouts)
  .get("/:workoutId", getOneWorkout)
  .get("/:workoutId/record", getRecordForWorkout)
  .post("/", createNewWorkout)
  .patch("/:workoutId", updateOneWorkout)
  .delete("/:workoutId", deleteOneWorkout);

module.exports = router;
