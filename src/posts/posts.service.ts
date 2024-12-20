import { BadRequestException, Injectable } from '@nestjs/common';
import { PostCreateReqBody } from './models/posts.request';
import { DatabaseService } from '../database/database.service';
import { PostEntity } from './models/post.entity';
import { UserRole } from '../users/models/user.entity';

@Injectable()
export class PostsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(data: PostCreateReqBody) {
    if (!!data.manager_id) {
      const manager = await this.databaseService.User.findUnique({
        where: { id: data.manager_id },
      });
      if (!manager || manager.role != UserRole.MANAGER) {
        throw new BadRequestException("Manager doesn't exist");
      }
    }
    const result = await this.databaseService.Post.create({
      data: new PostEntity(data),
    });

    return result.id;
  }

  findAll() {
    return this.databaseService.Post.findMany();
  }

  findOne(id: string) {
    return this.databaseService.Post.findUnique({
      where: { id },
    });
  }
}
