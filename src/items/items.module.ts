import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item } from './entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
 

@Module({
  imports: [TypeOrmModule.forFeature([Item])] , 
  exports: [TypeOrmModule],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}


// import { Module } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { UsersController } from './users.controller';
// import { User } from './entities/user.entity';
// import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   imports: [TypeOrmModule.forFeature([User])] , 
//   exports: [TypeOrmModule],
//   controllers: [UsersController],
//   providers: [UsersService]
// })
// export class UsersModule {}