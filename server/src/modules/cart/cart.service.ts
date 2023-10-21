import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './cart.model';

@Injectable()
export class CartService {
  constructor(
    @InjectModel('Cart')
    private cartModel: Model<Cart>
  ) { }

  async addToCart(userId: string, productId: string, priceOptionId: string, quantity: number = 1) {
    const cart = await this.cartModel.findOne({ userId });

    if (!cart) {
      const newCart = new this.cartModel({
        userId,
        products: [{ productId, priceOptionId, quantity }],
      });
      return await newCart.save();
    } else {
      cart.products = cart.products.map((product) => {
        if (
          product.priceOptionId === priceOptionId &&
          product.productId === productId
        ) {
          // Tìm thấy đối tượng thỏa mãn điều kiện, thực hiện thay đổi
          product.quantity += quantity;
        }
        return product; // Trả về đối tượng không thay đổi hoặc đã thay đổi
      });
      const existingProduct = cart.products.some((item) => item.priceOptionId === priceOptionId && item.productId === productId) 
      if (!existingProduct) {
        cart.products.push({ productId: productId, priceOptionId: priceOptionId, quantity });

      } 
      return await cart.save();
    }
  }

  async getCart(userId: string) {
    return await this.cartModel.findOne({ userId }).populate('products');
  }

}
