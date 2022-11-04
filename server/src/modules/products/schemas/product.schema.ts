import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string;
  @Prop()
  description: string;
  @Prop()
  avatar: string;
  @Prop()
  origin: string;
  @Prop()
  brand: string;
  @Prop({default: 0, require: true })
  price: number;
  @Prop({default: 0, require: true })
  discount: number;
  @Prop([String])
  color: string[];
  @Prop([Number])
  size: number[];
  @Prop({default: false })
  status: boolean;
  @Prop(Number)
  sold: number;
  @Prop(Number)
  amount: number;

  @Prop({slug: 'name', unique: true})
  slug: string;
  @Prop()
  deleteAt: Date;
}



export const ProductSchema = SchemaFactory.createForClass(Product);