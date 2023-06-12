import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get()
  checkToken(): string {
    return 'ok';
  }
}
