import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { AuthUserDTO } from './dto/auth-user.dto';
import { ForgotPwdUserDTO } from './dto/forfotpwd-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDTO) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }
  @Post('/login')
  async login(@Body() userDTO: AuthUserDTO): Promise<any> {
      return await this.usersService.validateUser(userDTO);
  }

  @Post('/forgotpwd')
  async findOnebyEmail(@Body() forgotPwdDTO : ForgotPwdUserDTO): Promise<any> {
      return await this.usersService.findOnebyEmail(forgotPwdDTO.email);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id')id: number, @Body() user: UpdateUserDTO){
      this.usersService.update(id, user);
      return `This action updates a #${id} User`;
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
