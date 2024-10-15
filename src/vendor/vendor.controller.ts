import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './vendor.dto';

@Controller('vendor')
export class VendorController {
    constructor(private readonly vendorService: VendorService) {}

    @Post('/postNewVendor')
    create(@Body() createVendorDto: CreateVendorDto) {
      return this.vendorService.create(createVendorDto);
    }
  
    @Get('/getAll')
    findAll() {
      return this.vendorService.findAll();
    }
  
    @Get('/getOneVendor/:id')
    findOne(@Param('id') id: string) {
      return this.vendorService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateVendorDto: CreateVendorDto) {
      return this.vendorService.update(id, updateVendorDto);
    }
  
}
