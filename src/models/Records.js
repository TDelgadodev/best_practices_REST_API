import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema({
  id: String,
  workout: String, 
  record: String,
});

const Record = mongoose.model('Record', recordSchema);

export default Record;
