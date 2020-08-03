import { Document } from 'mongoose';

export interface registerUser extends Document {
  readonly fullname: string;
  readonly emailid: string;
  readonly password: string;
  readonly login4code: number;
}

export interface loginUser extends Document {
  readonly emailid: string;
  readonly password: string;
}
