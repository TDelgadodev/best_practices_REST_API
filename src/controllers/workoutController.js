const {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
} = require("../services/workout.service");

module.exports = {
  getAllWorkouts: (req, res) => {
    const allWorkouts = getAllWorkouts();
    res.send("Get all Workouts:", allWorkouts);
  },
  getOneWorkout: (req, res) => {
    const workout = getOneWorkout(req.params.workoutId);
    res.send(`Get workout ${req.params.workoutId}:`, workout);
  },
  createNewWorkout: (req, res) => {
    const createdWorkout = createNewWorkout(req.params.workoutId);
    res.send(`Create workout ${req.params.workoutId}`, createdWorkout);
  },
  updateOneWorkout: (req, res) => {
    const updatedWorkout = updateOneWorkout(req.params.workoutId)
    res.send(`Update workout ${req.params.workoutId}`,updatedWorkout);
  },
  deleteOneWorkout: (req, res) => {
    deleteOneWorkout(req.params.workoutId)
    res.send(`Delete workout ${req.params.workoutId}`);
  },
};
