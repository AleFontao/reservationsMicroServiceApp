import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto as CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){
        
    }
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
        return this.usersService.createUser(createUserDto) ;      
    }

    @Get()
    async findAll(){ 
        return this.usersService.findAll();
    }
}
