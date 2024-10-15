import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './cart.schema';
import { CreateCartDto } from './cart.dto';

@Injectable()
export class CartService {
    constructor(@InjectModel(Cart.name) private cartModel: Model<Cart>) {}

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const newCart = new this.cartModel(createCartDto);
    return newCart.save();
  }

  async findAll(): Promise<Cart[]> {
    return this.cartModel.find().exec();
  }

  async findOne(id: string): Promise<Cart> {
    return this.cartModel.findById(id).exec();
  }

  async update(id: string, updateCartDto: CreateCartDto): Promise<Cart> {
    return this.cartModel.findByIdAndUpdate(id, updateCartDto, { new: true }).exec();
  }

}
