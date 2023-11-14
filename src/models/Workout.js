import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  id: String,
  name: String,
  mode: String,
  equipment: [String],
  exercises: [String],
  createdAt: Date,
  updatedAt: Date,
  trainerTips: [String],
});

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
