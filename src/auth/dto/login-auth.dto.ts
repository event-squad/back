import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUser {
  @IsNotEmpty()
  @IsEmail()
  readonly email;

  @IsNotEmpty()
  readonly password;
}
