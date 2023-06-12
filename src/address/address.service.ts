import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAddressCep } from './entities/userAddressCep.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import { User } from 'src/auth/entities/user.entity';
import { DecodedJWT } from 'src/types/request.decoded';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(UserAddressCep)
    private readonly userAddressCep: Repository<UserAddressCep>,
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}

  public async getUserCep(decoded: {
    userId: number;
    email: string;
    iat: Date;
    exp: Date;
  }) {
    const user = await this.findUser(decoded.userId);
    if (!user) throw new NotFoundException('User not founded');

    const cep = await this.userAddressCep.findOne({
      where: {
        userId: user.id,
      },
    });

    if (!cep) throw new NotFoundException();

    const address = await this.getFullAddress(cep.cep);

    if (!address || !address.data.logradouro) throw new NotFoundException();

    return address.data;
  }

  public create(userId: number, { cep }: CreateAddressDto) {
    const cepFounded = this.findCep(userId);
    if (cepFounded) throw new ConflictException('CEP ja existe!');

    return this.userAddressCep.save({
      cep,
      userId,
    });
  }

  public async update(decoded: any, updateAddressDto: any) {
    const cepFounded = await this.findCep(decoded.userId);
    const userFounded = await this.findUser(decoded.userId);
    const cepValidation = await this.getFullAddress(updateAddressDto.cep);

    console.log(cepValidation.data);

    if (!cepFounded || !userFounded || !cepValidation.data.logradouro)
      throw new NotFoundException();

    await this.userAddressCep
      .createQueryBuilder()
      .update(UserAddressCep)
      .set({ userId: decoded.userId, cep: updateAddressDto.cep })
      .execute();

    return 'CEP Atualizado!!!';
  }

  private async findCep(userId: number): Promise<UserAddressCep> {
    return await this.userAddressCep.findOne({
      where: {
        userId,
      },
    });
  }

  private async findUser(id: number) {
    return await this.user.findOne({
      where: {
        id,
      },
    });
  }

  private async getFullAddress(cep: string) {
    return await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
