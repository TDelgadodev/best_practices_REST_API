import {
  getAllWorkoutsForDb,
  getOneWorkoutFromDB,
  createOneNewWorkout,
  updateOneWorkoutDB,
  deleteOneWorkoutDB,
} from "../services/workout.service.js";

export const getAllWorkouts = async (req, res) => {
  try {
    const { mode } = req.query;
    const allWorkouts = await getAllWorkoutsForDb({ mode });
    res.status(200).json({ status: "OK", data: allWorkouts });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "FAILED",
      data: { error: error?.message || "Internal Server Error" },
    });
  }
};

export const getOneWorkout = async (req, res) => {
  try {
    const {
      params: { workoutId },
    } = req;

    if (!workoutId) {
      res.status(400).json({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
      return;
    }

    const workout = await getOneWorkoutFromDB(workoutId);

    if (!workout) {
      res.status(404).json({
        status: "FAILED",
        data: { error: `Workout with ID '${workoutId}' not found` },
      });
      return;
    }

    res.status(200).json({ status: "OK", data: workout });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "FAILED",
      data: { error: error?.message || "Internal Server Error" },
    });
  }
};

export const createNewWorkout = async (req, res) => {
  try {
    const { body } = req;

    if (
      !body.name ||
      !body.mode ||
      !body.equipment ||
      !body.exercises ||
      !body.trainerTips
    ) {
      res.status(400).json({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      });
      return;
    }

    const newWorkout = {
      name: body.name,
      mode: body.mode,
      equipment: body.equipment,
      exercises: body.exercises,
      trainerTips: body.trainerTips,
    };

    const createdWorkout = await createOneNewWorkout(newWorkout);
    res.status(201).json({ status: "OK", data: createdWorkout });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "FAILED",
      data: { error: error?.message || "Internal Server Error" },
    });
  }
};

export const updatedOneWorkout = async (req, res) => {
  try {
    const {
      body,
      params: { workoutId },
    } = req;

    if (!workoutId) {
      res.status(400).json({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
      return;
    }

    const updatedWorkout = await updateOneWorkoutDB(workoutId, body);
    res.status(200).json({ status: "OK", data: updatedWorkout });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "FAILED",
      data: { error: error?.message || "Internal Server Error" },
    });
  }
};

export const deletedOneWorkout = async (req, res) => {
  try {
    const {
      params: { workoutId },
    } = req;

    if (!workoutId) {
      res.status(400).json({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
      return;
    }

    await deleteOneWorkoutDB(workoutId);
    res.status(204).json({ status: "OK" });
  } catch (error) {
    res.status(error?.status || 500).json({
      status: "FAILED",
      data: { error: error?.message || "Internal Server Error" },
    });
  }
};
