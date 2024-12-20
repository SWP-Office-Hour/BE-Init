import { BadRequestException, Injectable } from '@nestjs/common';
import { TeamCreateReqBody } from './models/teams.request';
import { DatabaseService } from '../database/database.service';
import { TeamEntity } from './models/team.entity';
import { UserRole } from '../users/models/user.entity';
import {
  TeamMemberEntity,
  TeamMemberStatus,
} from './models/team_member.entity';

@Injectable()
export class TeamsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create({ post_id, status }: TeamCreateReqBody) {
    const existed = await this.databaseService.Post.findUnique({
      where: {
        id: post_id,
      },
    });

    if (!existed) {
      throw new BadRequestException('Post not found');
    }

    const result = await this.databaseService.Team.create({
      data: new TeamEntity({ post_id, status }),
    });

    return result;
  }

  findAll() {
    return this.databaseService.Team.findMany({
      include: {
        user_team: true,
      },
    });
  }

  findOne(id: string) {
    return this.databaseService.Team.findUnique({
      include: {
        user_team: true,
      },
      where: { id },
    });
  }

  async addMember(team_id: string, user_id: string) {
    const team = await this.databaseService.Team.findUnique({
      include: {
        user_team: true,
      },
      where: { id: team_id },
    });

    if (!team) {
      throw new BadRequestException('Team not found');
    }

    const user = await this.databaseService.User.findUnique({
      where: { id: user_id },
    });

    if (!user || user.role == UserRole.USER || user.role == UserRole.CUSTOMER) {
      throw new BadRequestException('User is not valid');
    }

    const existed = await this.databaseService.UserTeam.findFirst({
      where: {
        team_id,
        user_id,
        status: TeamMemberStatus.JOINED,
      },
    });

    if (existed) {
      throw new BadRequestException('User already in team');
    }

    try {
      await this.databaseService.UserTeam.create({
        data: {
          ...new TeamMemberEntity({
            user_id,
            team_id,
          }),
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Failed to add user to team');
    }

    return { team, user };
  }
}
