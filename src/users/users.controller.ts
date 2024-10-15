import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('/postNewUser')
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }
  
    @Get()
    findAll() {
      return this.userService.findAll();
    }
  
    @Get('/getOne/:id')
    findOne(@Param('id') id: string) {
      return this.userService.findOne(id);
    }
  
    @Put('/edit/:id')
    update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
      return this.userService.update(id, updateUserDto);
    }

}
