import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  id: String,
  name: String,
  gender: String,
  dateOfBirth: String,
  email: String,
  password: String,
});

const Member = mongoose.model('Member', memberSchema);

export default Member;
