import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@entities/user.entity';
import { LoggerModule } from '@logger/logger.module';
import { CacheModule } from '@nestjs/cache-manager';
import AppDataSource from '@infrastructure/database/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 300, // 5 minutes
      max: 100,
    }),
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
      autoLoadEntities: true,
      migrationsRun: false,
    }),
    TypeOrmModule.forFeature([User]),
    LoggerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}