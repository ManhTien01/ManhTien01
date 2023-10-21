import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './products.controller';
import { ProductService } from './products.service';
import Product  from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: Product }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductsModule {}