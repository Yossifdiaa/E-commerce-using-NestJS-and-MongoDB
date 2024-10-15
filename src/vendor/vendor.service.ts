import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vendor } from './vendor.schema';
import { CreateVendorDto } from './vendor.dto';

@Injectable()
export class VendorService {
    constructor(@InjectModel(Vendor.name) private vendorModel: Model<Vendor>) {}

    async create(createVendorDto: CreateVendorDto): Promise<Vendor> {
      const newVendor = new this.vendorModel(createVendorDto);
      return newVendor.save();
    }
  
    async findAll(): Promise<Vendor[]> {
      return this.vendorModel.find().exec();
    }
  
    async findOne(id: string): Promise<Vendor> {
      return this.vendorModel.findById(id).exec();
    }
  
    async update(id: string, updateVendorDto: CreateVendorDto): Promise<Vendor> {
      return this.vendorModel.findByIdAndUpdate(id, updateVendorDto, { new: true }).exec();
    }
  
}
