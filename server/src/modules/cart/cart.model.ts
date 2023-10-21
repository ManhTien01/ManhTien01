// cart.model.ts
import * as mongoose from 'mongoose';

export const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: { type: String},
      priceOptionId: { type: String},
      quantity: { type: Number, default: 1 }, // Mặc định số lượng là 1
    },
  ],
});

export interface Cart extends mongoose.Document {
  userId: string;
  products: {
    productId: string;
    priceOptionId: string;
    quantity: number;
  }[];
}
