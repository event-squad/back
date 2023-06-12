import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserAddressCep } from '../address/entities/userAddressCep.entity';
import { CreateUserDto } from './dto/create-auth.dto';
import { LoginUser } from './dto/login-auth.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  public async loginUser(user: LoginUser) {
    const userFounded = await this.findUser(user);
    if (!userFounded) throw new NotFoundException('User not found');

    const compare = bcrypt.compareSync(user.password, userFounded.password);

    if (!compare) throw new ConflictException('Invalid password');

    const payload = { userId: userFounded.id, email: user.email };
    return await this.jwtService.signAsync(payload);
  }

  public async createUser(user: CreateUserDto) {
    const email = await this.findUser(user);

    if (email) throw new ConflictException('Email already in use!');

    const passwordCrypted = bcrypt.hashSync(user.password, 10);

    return this.userRepository.save({
      email: user.email,
      name: user.name,
      number: '123123123',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      password: passwordCrypted,
    });
  }

  private findUser({ email }) {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }
}
