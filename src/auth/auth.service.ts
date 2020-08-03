import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUser } from './interfaces/auth.interface';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(emailid: string, password: string): Promise<any> {
    let response = await this.userService.findId({ emailid, password });
    return response;
  }
  async register(registerUser: RegisterUser): Promise<any> {
    let response = await this.userService.create(registerUser);
    return response;
  }
  async login(loginUser: any): Promise<any> {
    let payload = { username: loginUser.fullname, sub: loginUser._id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
