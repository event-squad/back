import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAddressCep } from './entities/userAddressCep.entity';
import { User } from 'src/auth/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAddressCep, User])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
