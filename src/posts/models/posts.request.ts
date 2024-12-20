import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { IsOptionalNonNullable } from '../../utils/decorators/optional.decorator';
import { ApiProperty } from '@nestjs/swagger';

const UUID_REG =
  /^[a-f\d]{8}-[a-f\d]{4}-[1-5][a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}$/;

export class PostCreateReqBody {
  @ApiProperty({
    name: 'manager_id',
    description: 'Manager of the post',
    required: false,
    type: String,
    example: 'e5bd237b-8088-4b73-bfbd-82b6523da9fc',
  })
  @Matches(UUID_REG, {
    message: 'Invalid manager_id',
  })
  @IsOptionalNonNullable()
  manager_id?: string;

  @ApiProperty({
    name: 'post_name',
    description: 'Name of the post',
    required: true,
    type: String,
    example: 'Post 1',
  })
  @IsString({
    message: 'Post name must be a string',
  })
  @IsNotEmpty({
    message: 'Post name is required',
  })
  post_name: string;

  @ApiProperty({
    name: 'country',
    description: 'Country of the post',
    required: true,
    type: String,
    example: 'Country of post 1',
  })
  @IsString({
    message: 'Country must be a string',
  })
  @IsNotEmpty({
    message: 'Country is required',
  })
  country: string;
}
