import { IsNotEmpty, Length } from 'class-validator';

export class UpdateAddressDto {
  @IsNotEmpty()
  @Length(8)
  cep: string;
}
