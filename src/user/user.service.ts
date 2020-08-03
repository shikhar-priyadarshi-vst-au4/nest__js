import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { registerUser, loginUser } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly User: Model<registerUser>,
  ) {}
  async create(user: registerUser) {
    let curUser = await this.User.findOne({ emailid: user.emailid }); //.exec();
    if (!curUser) {
      await this.User(user).save();
      return { status: true, message: 'user registered' };
    }
    return new UnauthorizedException('User already registered');
  }
  async findId(user: { emailid: string; password: string }) {
    let curUser = await this.User.findOne({
      emailid: user.emailid,
      password: user.password,
    });
    if (!curUser) {
      return null;
    }
    return curUser;
  }
  sanitizeUser(user: any) {
    const sanitized = JSON.parse(JSON.stringify(user));
    delete sanitized['password'];
    return sanitized;
  }
}
