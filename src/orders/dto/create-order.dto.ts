import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { UUID_REG } from '../../utils/const/REG';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    description: 'customer_id of the order',
    type: String,
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString({
    message: 'customer_id must be a string',
  })
  @IsNotEmpty({
    message: 'customer_id is required',
  })
  @Matches(UUID_REG, {
    message: 'customer_id must be a valid UUID',
  })
  customer_id: string;

  @ApiProperty({
    description: 'sender_name of the order',
    type: String,
    example: 'John Doe',
  })
  @IsString({
    message: 'sender_name must be a string',
  })
  @IsNotEmpty({ message: 'sender_name is required' })
  sender_name: string;

  @ApiProperty({
    description: 'sender_phone of the order',
    type: String,
    example: '08123456789',
  })
  @IsString({
    message: 'sender_phone must be a string',
  })
  @IsNotEmpty({ message: 'sender_phone is required' })
  sender_phone: string;

  @ApiProperty({
    description: 'sender_address_id of the order',
    type: String,
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString({
    message: 'sender_address_id must be a string',
  })
  @IsNotEmpty({
    message: 'sender_address_id is required',
  })
  @Matches(UUID_REG, {
    message: 'sender_address_id must be a valid UUID',
  })
  sender_address_id: string;

  @ApiProperty({
    description: 'receiver_name of the order',
    type: String,
    example: 'Jane Doe',
  })
  @IsString({
    message: 'receiver_name must be a string',
  })
  @IsNotEmpty({ message: 'receiver_name is required' })
  receiver_name: string;

  @ApiProperty({
    description: 'receiver_phone of the order',
    type: String,
    example: '08123456789',
  })
  @IsString({
    message: 'receiver_phone must be a string',
  })
  @IsNotEmpty({ message: 'receiver_phone is required' })
  receiver_phone: string;

  @ApiProperty({
    description: 'receiver_address_id of the order',
    type: String,
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString({
    message: 'receiver_address_id must be a string',
  })
  @IsNotEmpty({
    message: 'receiver_address_id is required',
  })
  @Matches(UUID_REG, {
    message: 'receiver_address_id must be a valid UUID',
  })
  receiver_address_id: string;
}
