import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { Repository } from 'typeorm';
import { AuthUserDTO } from './dto/auth-user.dto';



@Injectable()
export class UsersService {
 

   constructor(
    @InjectRepository(User)
    private users: Repository<User>,


  ) {}


  //private users: Array<User> = [];
  private id = 0;

  async create(createUserDto: CreateUserDTO) {
    await this.users.save({ id: ++this.id, ...createUserDto })
    //this.users.push({ id: ++this.id, ...createUserDto, createdAt: new Date() });
  }

  async findAll() {
    return await this.users.find();
  }

  findOnebyEmail(email: string): Promise<User> {
    return this.users.findOne({
      where : {email: email, isvalid: true   }
    });
  }
  
  findOne(id: number): Promise<User> {
    return this.users.findOne({
      where : {id: id, isvalid: true   }
    });
  }

  async validateUser (  authUser : AuthUserDTO)  {
    let userFind : User =  await this.users.findOneBy({
        loginname:  authUser.loginname,
        password: authUser.password
    });

    if (!userFind || authUser.password !=  userFind.password) {
      throw new UnauthorizedException();
    }
    return userFind; 
  } 

  async update( id: number ,  updateUserDto : UpdateUserDTO) {
    const findUser = await this.users.findOne({
      where : {id}
    });
    if(findUser){
        await this.users.update(id, 
          { 
            name: updateUserDto.name,
            email:  updateUserDto.email,
            phone : updateUserDto.phone, 
            loginname:updateUserDto.loginname, 
            //password: updateUserDto.pa 
            //createdBy: updateUserDto.c;
            //companyId: updateUserDto.companyId,
            updatedBy: updateUserDto.updatedBy,
            updatedAt: new Date().toISOString(),
          })
    }    
    return updateUserDto;
  } 


  // async validateUser(user: User): Promise<User | undefined> {
  //   let userFind: User = await this.user.findByFields({ 
  //       where: { username: user.username }
  //   });
  //   if(!userFind || user.password !== userFind.password) {
  //       throw new UnauthorizedException();
  //   }
  //   return userFind;
  // }


  // findOne(id: number) {
  //   const found = this.users.find((u) => u.id === id);
  //   if (!found) throw new NotFoundException();
  //   return found;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   const found = this.findOne(id);
  //   this.remove(id);
  //   this.users.push({ ...found, ...updateUserDto, updatedAt: new Date() });
  // }

  // remove(id: number) {
  //   this.findOne(id);
  //   this.users = this.users.filter((u) => u.id !== id);
  // }
}
