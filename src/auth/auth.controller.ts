import {
  Controller,
  Post,
  Body,
  Get,
  UsePipes,
  ValidationPipe,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUser } from './dto/login-auth.dto';
import { CreateUserDto } from './dto/create-auth.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  @UsePipes(new ValidationPipe())
  login(@Body() user: LoginUser) {
    return this.authService.loginUser(user);
  }

  @Post('/signup')
  create(@Body() user: CreateUserDto) {
    return this.authService.createUser(user);
  }
}
