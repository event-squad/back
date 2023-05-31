import { IsDate, IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly name;
  @IsNotEmpty()
  @IsEmail()
  readonly email;
  @IsNotEmpty()
  @IsStrongPassword()
  readonly password;
  @IsNotEmpty()
  @IsDate()
  readonly createdAt;
  @IsNotEmpty()
  @IsDate()
  readonly updatedAt;
}
