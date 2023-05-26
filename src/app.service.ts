import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './typeorm/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  getUser(): Promise<User[]> {
    return this.userRepository.find();
  }
}
