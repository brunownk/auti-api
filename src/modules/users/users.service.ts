import { Injectable, ConflictException } from '@nestjs/common';
import { SignupDto } from '../auth/dto/signup.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async create(signupDto: SignupDto) {
    const { name, email, password } = signupDto;
    const existingUser = await this.usersRepo.findUnique({ where: { email } });
    if (existingUser) {
      throw new ConflictException();
    }
    const hashedPassword = await hash(password, 12);
    return this.usersRepo.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }

  getUserById(userId: string) {
    return this.usersRepo.findUnique({
      where: { id: userId },
      select: {
        name: true,
        email: true,
      },
    });
  }
}
