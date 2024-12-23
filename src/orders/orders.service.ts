import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { DatabaseService } from '../database/database.service';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async checkAddress(address_id: string) {
    const address = await this.databaseService.Address.findUnique({
      where: {
        id: address_id,
      },
    });
    return Boolean(address);
  }

  async create(createOrderDto: CreateOrderDto) {
    const addressExist = await Promise.all([
      this.checkAddress(createOrderDto.receiver_address_id),
      this.checkAddress(createOrderDto.sender_address_id),
    ]);

    if (!addressExist[0] || !addressExist[1]) {
      throw new BadRequestException('Address not found');
    }

    const new_order = await this.databaseService.Order.create({
      data: new OrderEntity(createOrderDto),
    });

    return new_order;
  }

  findAll() {
    return this.databaseService.Order.findMany();
  }

  findOne(id: string) {
    return this.databaseService.Order.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
