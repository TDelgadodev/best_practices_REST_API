import { v4 as uuid } from "uuid";
import Workout from '../models/Workout.js';

export const getAllWorkoutsForDb = async (filterParams) => {
  try {
    const query = {};
    
    if (filterParams.mode) {
      query.mode = { $regex: new RegExp(filterParams.mode, 'i') };
    }

    const allWorkouts = await Workout.find(query);
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

export const getOneWorkoutFromDB = async (workoutId) => {
  try {
    const workout = await Workout.findById(workoutId);
    if (!workout) {
      throw { status: 400, message: `Can't find workout with the id '${workoutId}'` };
    }
    return workout;
  } catch (error) {
    throw error;
  }
};

export const createOneNewWorkout = async (newWorkout) => {
  try {
    const workoutToInsert = {
      ...newWorkout,
      id: uuid(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const createdWorkout = await Workout.create(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

export const updateOneWorkoutDB = async (workoutId, changes) => {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      workoutId,
      { $set: changes },
      { new: true }
    );
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

export const deleteOneWorkoutDB = async (workoutId) => {
  try {
    await Workout.findByIdAndDelete(workoutId);
  } catch (error) {
    throw error;
  }
};
