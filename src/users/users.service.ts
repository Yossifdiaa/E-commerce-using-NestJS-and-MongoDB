import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
      const newUser = new this.userModel(createUserDto);
      return newUser.save();
    }
  
    async findAll(): Promise<User[]> {
      return this.userModel.find().exec();
    }
  
    async findOne(id: string): Promise<User> {
      return this.userModel.findById(id).exec();
    }
  
    async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
      return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }
  
}
