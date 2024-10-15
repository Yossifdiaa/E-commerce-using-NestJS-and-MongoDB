import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './cart.dto';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Post('/postNewCart')
    create(@Body() createCartDto: CreateCartDto) {
      return this.cartService.create(createCartDto);
    }
  
    @Get('/getAll')
    findAll() {
      return this.cartService.findAll();
    }
  
    @Get('/getOne/:id')
    findOne(@Param('id') id: string) {
      return this.cartService.findOne(id);
    }
  
    @Put('/edit/:id')
    update(@Param('id') id: string, @Body() updateCartDto: CreateCartDto) {
      return this.cartService.update(id, updateCartDto);
    }
  
}
