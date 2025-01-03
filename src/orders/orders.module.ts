import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { DatabaseService } from '../database/database.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, DatabaseService],
})
export class OrdersModule {}
