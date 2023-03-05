import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CaslModule } from './casl/casl.module';
import { JobsModule } from './jobs/jobs.module';
import { OrgsModule } from './orgs/orgs.module';
import { UserProfilesModule } from './user-profiles/user-profiles.module';
import { OrgProfilesModule } from './org-profiles/org-profiles.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DATABASE_HOST'),
          port: configService.get('DATABASE_PORT'),
          username: configService.get('DATABASE_USERNAME'),
          password: configService.get('DATABASE_PASSWORD'),
          database: configService.get('DATABASE_NAME'),
          //ssl: {
          //rejectUnauthorized: false,
          //ca: process.env.CA_CERT,
          //},
          entities: [],
          synchronize: false,
          autoLoadEntities: true,
        };
      },
    }),
    TypeOrmModule.forFeature([]),
    AuthModule,
    UsersModule,
    CaslModule,
    JobsModule,
    OrgsModule,
    UserProfilesModule,
    OrgProfilesModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
