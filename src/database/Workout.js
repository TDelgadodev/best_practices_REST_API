const { saveToDatabase } = require('../tools/utils');
const DB = require('./db.json');


const getAllWorkouts = (filterParams) => {
    try {
        let workouts = DB.workouts;
        if (filterParams.mode) {
          return DB.workouts.filter((workout) =>
            workout.mode.toLowerCase().includes(filterParams.mode)
          );
        }
        return workouts;
      } catch (error) {
        throw { status: 500, message: error };
      }
    }

const createNewWorkout = (newWorkout) => {
  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${newWorkout.name}' already exists`,
      };
    }

    DB.workouts.push(newWorkout);
    saveToDatabase(DB);

    return newWorkout;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
}

module.exports = {
    getAllWorkouts,
    createNewWorkout
}