import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './typeorm/user.entity';

@Controller('api/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): Promise<User[]> {
    return this.appService.getUser();
  }
}
