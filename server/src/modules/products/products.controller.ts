
import { ProductsService } from './products.service';
import { Controller, Get, Req, Param } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schemas/product.schema';
import { Request } from "express";
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  // @Get()
  // async findAll(): Promise<Product[]> {
  //   return this.productsService.findAll();
  // }
  @Get()
  async findAll() {
    return this.productsService.find({});
  }
  @Get('datasort')
  async datasort(@Req() req: Request) {
    let options = {};

    if (req.query.status) {
      options = {
        $or: [
          { status: req.query.status},
          
        ]
      }
    }

    if (req.query.s) {
      options = {
        $or: [
          { name: new RegExp(req.query.s.toString(), 'i') },
          { description: new RegExp(req.query.s.toString(), 'i') },
        ]
      }
    }
    if (req.query.category) {
      options = {
        $or: [
          { category: new RegExp(req.query.category.toString(), 'i') },
        ]
      }
    }

    const query = this.productsService.find(options);

    if (req.query.sort_price) {
      query.sort({
        price: req.query.sort_price as any
      })
    }
    if (req.query.sort_sold) {
      query.sort({
        sold: req.query.sort_sold as any
      })
    }
    if (req.query.sort_time) {
      query.sort({

        createdAt: req.query.sort_time as any,
      })
    }
    if (req.query.sort_popularity) {
      query.sort({
        amount: req.query.sort_popularity as any,
      })
    }

    const page: number = parseInt(req.query.page as any) || 1
    const limit = 10;
    const total = await this.productsService.count(options)
    const data = await query.skip((page - 1) * limit).limit(limit).exec()
    

    // return query

    return {
      data,
      total,
      page,
      last_page: Math.ceil(total / limit)
    }
  }

  
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }
  
  
}