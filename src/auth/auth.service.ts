import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Session } from 'src/typeorm/session.entity';
import { Repository } from 'typeorm';
import { User } from '../typeorm/user.entity';
import { LoginUser } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
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

  private findUser({ email }): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }
}
