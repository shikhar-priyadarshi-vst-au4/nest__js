import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  emailid: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  login4code: { type: String },
});
