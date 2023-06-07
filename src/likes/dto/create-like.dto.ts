import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateLikeDTO {
  @IsNotEmpty()
  @IsNumber()
  eventId: number;
}
