import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @Length(8)
  @IsString()
  cep: string;
}
