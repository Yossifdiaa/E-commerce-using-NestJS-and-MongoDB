import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';
import { CreateProductDto } from './product.dto';
@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
      const newProduct = new this.productModel(createProductDto);
      return newProduct.save();
    }
  
    async findAll(): Promise<Product[]> {
      return this.productModel.find().exec();
    }
  
    async findOne(id: string): Promise<Product> {
      return this.productModel.findById(id).exec();
    }
  
    async update(id: string, updateProductDto: CreateProductDto): Promise<Product> {
      return this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
    }
  
}
