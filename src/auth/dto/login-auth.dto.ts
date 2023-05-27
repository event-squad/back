import { IsEmail, IsNotEmpty, Min } from 'class-validator';

export class LoginUser {
  @IsNotEmpty()
  @IsEmail()
  readonly email;

  @IsNotEmpty()
  readonly password;
}
