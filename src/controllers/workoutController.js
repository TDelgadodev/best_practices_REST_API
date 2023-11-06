const {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
} = require("../services/workout.service");

module.exports = {
  getAllWorkouts: (req, res) => {
    const { mode } = req.query;
    try {
      const allWorkouts = getAllWorkouts({ mode });
      res.send({ status: "OK", data: allWorkouts });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  },
  getOneWorkout: (req, res) => {
    const {
      params: { workoutId },
    } = req;

    if (!workoutId) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
      return;
    }

    try {
      const workout = getOneWorkout(workoutId);
      res.send({ status: "OK", data: workout });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  },
  createNewWorkout: (req, res) => {
    const { body } = req;
    
    if (
      !body.name ||
      !body.mode ||
      !body.equipment ||
      !body.exercises ||
      !body.trainerTips
    ) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      });
    }

    const newWorkout = {
      name: body.name,
      mode: body.mode,
      equipment: body.equipment,
      exercises: body.exercises,
      trainerTips: body.trainerTips,
    };

    try {
      const createdWorkout = createNewWorkout(newWorkout);
      res.status(201).send({ status: "OK", data: createdWorkout });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILDED", data: { error: error?.message || error } });
    }
  },
  updateOneWorkout: (req, res) => {
    const updatedWorkout = updateOneWorkout(req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`, updatedWorkout);
  },
  deleteOneWorkout: (req, res) => {
    deleteOneWorkout(req.params.workoutId);
    res.send(`Delete workout ${req.params.workoutId}`);
  },
};
