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
import { JobTypesService } from './job-types/job-types.service';
import { JobTypesModule } from './job-types/job-types.module';
import { JobType } from './job-types/job-type.entity';
import { Job } from './jobs/job.entity';
import { OrgProfile } from './org-profiles/org-profile.entity';
import { Org } from './orgs/org.entity';
import { Role } from './roles/role.entity';
import { UserProfile } from './user-profiles/user-profile.entity';
import { User } from './users/user.entity';
import { JobsController } from './jobs/jobs.controller';
import { UsersController } from './users/users.controller';
import { RolesController } from './roles/roles.controller';
import { OrgsController } from './orgs/orgs.controller';
import { JobTypesController } from './job-types/job-types.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const sslSettings =
          process.env.DATABASE_SSL_MODE === 'true'
            ? {
                ssl: {
                  rejectUnauthorized: false,
                  ca: process.env.CA_CERT,
                },
              }
            : {};
        return {
          type: 'postgres',
          host: configService.get('DATABASE_HOST'),
          port: configService.get('DATABASE_PORT'),
          username: configService.get('DATABASE_USERNAME'),
          password: configService.get('DATABASE_PASSWORD'),
          database: configService.get('DATABASE_NAME'),
          ...sslSettings,
          entities: [JobType, Job, OrgProfile, Org, Role, UserProfile, User],
          synchronize: false,
          autoLoadEntities: true,
        };
      },
    }),
    TypeOrmModule.forFeature([
      JobType,
      Job,
      OrgProfile,
      Org,
      Role,
      UserProfile,
      User,
    ]),
    AuthModule,
    UsersModule,
    CaslModule,
    JobsModule,
    OrgsModule,
    UserProfilesModule,
    OrgProfilesModule,
    RolesModule,
    JobTypesModule,
  ],
  controllers: [
    AppController,
    JobsController,
    UsersController,
    RolesController,
    OrgsController,
    JobTypesController,
  ],
  providers: [AppService, JobTypesService],
})
export class AppModule {}
