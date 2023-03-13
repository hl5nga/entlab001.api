import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity'
import { ConfigModule } from '@nestjs/config';
import { CompanysModule } from './companys/companys.module';
import { Company } from './companys/entities/company.entity';
import { ItemsModule } from './items/items.module';
import { Item } from './items/entities/item.entity'
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/entities/contact.entity';


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

      entities: [User , Company, Item , Contact],
      synchronize: true,
    }),
    UsersModule,
    CompanysModule,
    ItemsModule,
    ContactsModule, 
  ], 
    exports: [TypeOrmModule] , 
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



 