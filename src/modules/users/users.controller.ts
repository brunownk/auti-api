import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupDto } from '../auth/dto/signup.dto';
import { UsersService } from './users.service';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() signupDto: SignupDto) {
    return this.usersService.create(signupDto);
  }

  @Get('/me')
  me(@ActiveUserId() userId: string) {
    return this.usersService.getUserById(userId);
  }
}
