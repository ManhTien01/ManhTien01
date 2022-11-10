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
  material: string;
  @Prop()
  brand: string;
  @Prop()
  suitable_width: boolean;
  @Prop()
  type_lock: string;
  @Prop()
  type_skin: string;
  @Prop()
  out_skin: string;
  @Prop()
  shoes_height: string;
  @Prop()
  heel_height: string;
  @Prop({default: 0, require: true })
  price: number;
  @Prop({default: 0, require: true })
  discount: number;
  @Prop([String])
  color: string[];
  @Prop([Number])
  size: number[];
  @Prop({default: false })
  status: Boolean;
  @Prop(Number)
  sold: number;
  @Prop(Number)
  amount: number;
  @Prop()
  category: string;
  @Prop()
  subcategory: string;
  @Prop([String])
  images: string[];

  @Prop({slug: 'name', unique: true})
  slug: string;
  @Prop()
  deleteAt: Date;
}



export const ProductSchema = SchemaFactory.createForClass(Product);