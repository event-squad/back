import { Module, Session } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { Address } from './typeorm/address.entity';
import { Comments } from './typeorm/comments.entity';
import { Contact } from './typeorm/contact.entity';
import { ContactType } from './typeorm/contactType.entity';
import { Event } from './typeorm/event.entity';
import { EventCategory } from './typeorm/eventCategory.entity';
import { EventCategoryName } from './typeorm/eventCategoryName.entity';
import { EventFollowers } from './typeorm/eventFollowers.entity';
import { Producer } from './typeorm/producer.entity';
import { User } from './typeorm/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
