import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'emailid' });
  }
  async validate(emailid: string, password: string) {
    console.log(emailid, password);
    const user = await this.authService.validateUser(emailid, password);
    console.log('local >>', user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
