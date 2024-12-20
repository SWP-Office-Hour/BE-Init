import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Matches } from 'class-validator';
import { IsOptionalNonNullable } from '../../utils/decorators/optional.decorator';

const UUID_REG =
  /^[a-f\d]{8}-[a-f\d]{4}-[1-5][a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}$/;

export class TeamCreateReqBody {
  @ApiProperty({
    name: 'post_id',
    description: 'Post of the team',
    required: true,
    type: String,
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @Matches(UUID_REG, {
    message: 'Invalid post_id',
  })
  @IsNotEmpty({
    message: 'Post Id is required',
  })
  post_id: string;

  @ApiProperty({
    name: 'status',
    description: 'Status of the team',
    required: false,
    type: Number,
    example: 1,
  })
  @IsInt()
  @IsOptionalNonNullable()
  status?: number;
}

export class TeamAddMemberReqBody {
  team_id: string;
  user_id: string;
}
