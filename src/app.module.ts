import {
  MiddlewareConsumer,
  Module,
  RequestMethod,
  Session,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { UserAddressCep } from './address/entities/userAddressCep.entity';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import { CategoryModule } from './category/category.module';
import { EventCategoryName } from './category/entities/EventCategoryName';
import { Address } from './entities/address.entity';
import { Comments } from './entities/comments.entity';
import { Contact } from './entities/contact.entity';
import { ContactType } from './entities/contactType.entity';
import { EventFollowers } from './entities/eventFollowers.entity';
import { Producer } from './entities/producer.entity';
import { Event } from './events/entities/event.entity';
import { EventsModule } from './events/events.module';
import { Likes } from './likes/entities/like.entity';
import { LikesController } from './likes/likes.controller';
import { LikesModule } from './likes/likes.module';
import { JwtMiddleware } from './middleware/jwt.middeware';
import { AddressController } from './address/address.controller';

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
          Comments,
          EventFollowers,
          ContactType,
          Contact,
          EventCategoryName,
          Likes,
          UserAddressCep,
        ],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    EventsModule,
    CategoryModule,
    LikesModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .forRoutes(LikesController, AddressController, AppController);
  }
}
