import Record from "../database/Record.js";

const getRecordForWorkout = async (workoutId) => {
  try {
    const record = await Record.getRecordForWorkout(workoutId);
    if (!record) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }

    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

export default { getRecordForWorkout };
