// cart.controller.ts
import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard'; 
import { CartService } from './cart.service';

@Controller('cart')
@UseGuards(AuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  async addToCart(
    @Request() req,
    @Body() productDto: { productId: string; priceOptionId: string; quantity: number },
  ) {
    const userId = req.user.id;
    const { productId,priceOptionId, quantity } = productDto;
    await this.cartService.addToCart(userId, productId,priceOptionId, quantity);
    return this.cartService.getCart(userId);
  }

  @Get()
  async getCart(@Request() req) {
    const userId = req.user.id;
    return this.cartService.getCart(userId);
  }

  // ...
}
