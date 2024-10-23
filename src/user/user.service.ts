import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  // find all
  async findAll() {
    const users = await this.userRepository.find({});
    return users;
  }

  // find by id
  async findOne(id: string) {
    const user = await this.userRepository.findOne({
      where: [{ id: id }]
    });

    if (user) {
      return user;
    }

    throw new HttpException('Invalid username and password', HttpStatus.NOT_FOUND);
  }

  async findOneByUsername(username: string) {
    const user = await this.userRepository.findOneBy({ username: username });
    if (user) {
      return user;
    }
  }

  // create
  async create(user: CreateUserDto) {
    const existingUserName = await this.findOneByUsername(user.username);
    if (existingUserName) {
      throw new HttpException('Username already exists', HttpStatus.BAD_REQUEST);
    }
    const newUser = await this.userRepository.create(user);
    await this.userRepository.save(newUser);

    return newUser;
  }

  // update
  async update(id: string, post: UpdateUserDto) {
    await this.userRepository.update(id, post);
    const updatedUser = await this.userRepository.findOneBy({ id: id });
    if (updatedUser) {
      return updatedUser;
    }

    throw new HttpException('Invalid username and password', HttpStatus.NOT_FOUND);
  }

  // delete
  async delete(id: string) {
    const deletedUser = await this.userRepository.delete(id);
    if (!deletedUser.affected) {
      throw new HttpException('Invalid username and password', HttpStatus.NOT_FOUND);
    }
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, +process.env.AUTH_SALT_ROUNDS);
  }
}