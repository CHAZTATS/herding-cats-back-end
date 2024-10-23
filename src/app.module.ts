import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityModule } from './activity/activity.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Event } from './event/entities/event.entity';
import { EventModule } from './event/event.module';
import { Guest } from './guest/entities/guest.entity';
import { GuestModule } from './guest/guest.module';
import { GuestPossibleDate } from './guest_possible-date/entities/guest_possible-date.entity';
import { GuestPossibleDateModule } from './guest_possible-date/guest_possible-date.module';
import { PossibleDate } from './possible-date/entities/possible-date.entity';
import { PossibleDateModule } from './possible-date/possible-date.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `environment/${process.env.NODE_ENV || ''}.env`,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      schema: process.env.DB_SCHEMA,
      entities: [
        User,
        Event,
        Guest,
        PossibleDate,
        GuestPossibleDate
      ],
      synchronize: true
      // logging: true
    }),
    EventModule,
    UserModule,
    AuthModule,
    GuestModule,
    PossibleDateModule,
    ActivityModule,
    GuestPossibleDateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
