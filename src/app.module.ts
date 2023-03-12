import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity'
import { ConfigModule } from '@nestjs/config';
import { CompanysModule } from './companys/companys.module';
import { Company } from './companys/entities/company.entity';


@Module({
  imports: [UsersModule, 
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:  process.env.DB_HOST  , 
      port: Number(process.env.DB_PORT),
      username:  process.env.DB_USERNAME ,
      password:  process.env.DB_PASSWORD,
      database:  process.env.DB_DATABASE,

      entities: [User , Company ],
      synchronize: true,
    }),
    UsersModule,
    CompanysModule
  ], 
    exports: [TypeOrmModule] , 
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



 