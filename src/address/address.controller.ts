import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { DecodedJWT } from 'src/types/request.decoded';

@Controller('/api/address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(
    @Req() { decoded }: DecodedJWT,
    @Body() createAddressDto: CreateAddressDto,
  ) {
    return this.addressService.create(decoded.userId, createAddressDto);
  }

  @Get()
  getUserCep(@Req() { decoded }: DecodedJWT) {
    return this.addressService.getUserCep(decoded);
  }

  @Put()
  update(
    @Req() { decoded }: DecodedJWT,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return this.addressService.update(decoded, updateAddressDto);
  }
}
