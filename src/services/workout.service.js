const { v4: uuid } = require('uuid');
const { getAllWorkouts,createNewWorkout } = require("../database/Workout");

module.exports = {
  getAllWorkouts: (filterParams) => {
    try {
        const allWorkouts = getAllWorkouts(filterParams);
        return allWorkouts;
      } catch (error) {
        throw error;
      }
  },
  getOneWorkout: () => {
    return;
  },
  createNewWorkout: (newWorkout) => {

   const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-es",  { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString("en-es",  { timeZone: 'UTC' }),
   }

   const createdWorkout = createNewWorkout(workoutToInsert);
   return createdWorkout

  },
  deleteOneWorkout: () => {
    return;
  },
  updateOneWorkout: () => {
    return;
  },
};
