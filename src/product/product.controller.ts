import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post('/postProduct')
    create(@Body() createProductDto: CreateProductDto) {
      return this.productService.create(createProductDto);
    }
  
    @Get('/getAll')
    findAll() {
      return this.productService.findAll();
    }
  
    @Get('/getProduct/:id')
    findOne(@Param('id') id: string) {
      return this.productService.findOne(id);
    }
  
    @Put('/edit/:id')
    update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto) {
      return this.productService.update(id, updateProductDto);
    }
  
}
