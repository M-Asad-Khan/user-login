/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepo:Repository<User>){}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto);
     await this.userRepo.save(user);
     delete user.password;
     return user;

  }

  async showById(id: number):Promise<User> {
    const user = await this.userRepo.findOneById(id);
    delete user.password;
    return user;
  }

  async findByEmail(email: string) {
    return await this.userRepo.findOne({
      where:{
        email:email,
      }
    })
  }


}
