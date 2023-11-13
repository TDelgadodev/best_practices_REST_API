import { v4 as uuid } from "uuid";
import {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout
} from "../database/Workout.js";


  export const getAllWorkoutsForDb = (filterParams) => {
    try {
      const allWorkouts = getAllWorkouts(filterParams);
      return allWorkouts;
    } catch (error) {
      throw error;
    }
  }

  export const getOneWorkoutFromDB = (workoutId) => {
    try {
      const workout = getOneWorkout(workoutId);
      return workout;
    } catch (error) {
      throw error;
    }
  }
  
  export const createOneNewWorkout = (newWorkout) => {
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
  }
  export const updateOneWorkoutDB = (workoutId, changes) => {
    try {
      const updatedWorkout = updateOneWorkout(workoutId,changes)
      return updatedWorkout
    } catch (error) {
      throw error;
    }
  }

  export const deleteOneWorkoutDB = (workoutId) => {
    try {
      deleteOneWorkout(workoutId);
    } catch (error) {
      throw error;
    }
  }

