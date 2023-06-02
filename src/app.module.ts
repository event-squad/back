import { Module, Session } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import { Address } from './entities/address.entity';
import { Comments } from './entities/comments.entity';
import { Contact } from './entities/contact.entity';
import { ContactType } from './entities/contactType.entity';
import { EventCategory } from './entities/eventCategory.entity';
import { EventCategoryName } from './entities/eventCategoryName.entity';
import { EventFollowers } from './entities/eventFollowers.entity';
import { Producer } from './entities/producer.entity';
import { Event } from './events/entities/event.entity';
import { EventsModule } from './events/events.module';

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
    EventsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
