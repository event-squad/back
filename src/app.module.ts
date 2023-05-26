import { Module, Session } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/user.entity';
import { Address } from './typeorm/address.entity';
import { Comments } from './typeorm/comments.entity';
import { Contact } from './typeorm/contact.entity';
import { ContactType } from './typeorm/contactType.entity';
import { EventCategory } from './typeorm/eventCategory.entity';
import { EventCategoryName } from './typeorm/eventCategoryName.entity';
import { EventFollowers } from './typeorm/eventFollowers.entity';
import { Producer } from './typeorm/producer.entity';
import { Event } from './typeorm/event.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature([
      User,
      Session,
      Event,
      Address,
      Producer,
      EventCategory,
      EventCategoryName,
      Comments,
      EventFollowers,
      ContactType,
      Contact,
    ]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [
          User,
          Session,
          Event,
          Address,
          Producer,
          EventCategory,
          EventCategoryName,
          Comments,
          EventFollowers,
          ContactType,
          Contact,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
