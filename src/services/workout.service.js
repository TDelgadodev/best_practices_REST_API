const { v4: uuid } = require("uuid");
const {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout
} = require("../database/Workout");

module.exports = {
  getAllWorkouts: (filterParams) => {
    try {
      const allWorkouts = getAllWorkouts(filterParams);
      return allWorkouts;
    } catch (error) {
      throw error;
    }
  },
  getOneWorkout: (workoutId) => {
    try {
      const workout = getOneWorkout(workoutId);
      return workout;
    } catch (error) {
      throw error;
    }
  },
  createNewWorkout: (newWorkout) => {
    try {
      const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-es", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-es", { timeZone: "UTC" }),
      };
  
      const createdWorkout = createNewWorkout(workoutToInsert);
      return createdWorkout; 
    } catch (error) {
      throw error
    }
  },
  updateOneWorkout: (workoutId, changes) => {
    try {
      const updatedWorkout = updateOneWorkout(workoutId,changes)
      return updatedWorkout
    } catch (error) {
      throw error;
    }
  },
  deleteOneWorkout: (workoutId) => {
    try {
      deleteOneWorkout(workoutId);
    } catch (error) {
      throw error;
    }
  }
};
