import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { CartModule } from './modules/cart/cart.module';
import { ProductsModule } from './modules/products/products.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';

@Module({
  
  controllers: [AppController],
  providers: [UsersService],
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/QLBG_dev'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    CartModule,
    ProductsModule,
    AuthModule,
  ],
})
export class AppModule {}
