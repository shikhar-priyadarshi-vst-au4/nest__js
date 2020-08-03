import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDTO } from './dto/auth.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  registerUser(@Body() user: RegisterUserDTO) {
    console.log('user-info >>', user);
    return this.authService.register(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  loginUser(@Request() req) {
    console.log('login-info >>', req.user);
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  isAuthorised(@Request() req) {
    return req.user;
  }
}
