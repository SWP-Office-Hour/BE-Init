import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotImplementedException,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamCreateReqBody } from './models/teams.request';
import { ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  create(@Body() createTeamDto: TeamCreateReqBody) {
    return this.teamsService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(id);
  }

  @ApiParam({
    name: 'id',
    type: String,
    description: 'Team ID',
    example: 'a7daad73-beff-40c5-8137-edc5646c5d8c',
    required: true,
  })
  @ApiBody({
    type: Object,
    description: 'User ID',
    required: true,
  })
  @Post(':id')
  addMember(
    @Param('id') team_id: string,
    @Body() { user_id }: { user_id: string },
  ) {
    // return `This action adds a new member to team ${team_id} with user ${user_id}`;
    return this.teamsService.addMember(team_id, user_id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    throw new NotImplementedException();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.teamsService.remove(+id);
    throw new NotImplementedException();
  }
}
