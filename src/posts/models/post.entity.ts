interface PostType {
  id?: string;
  manager_id?: string;
  post_name: string;
  country: string;
  status?: number;
  created_at?: Date;
  updated_at?: Date;
}

export class PostEntity {
  id?: string;
  manager_id: string;
  post_name: string;
  country: string;
  status: number;
  created_at: Date;
  updated_at: Date;

  constructor(data: PostType) {
    this.id = data.id;
    this.manager_id = data.manager_id || '';
    this.post_name = data.post_name;
    this.country = data.country;
    this.status = data.status || PostStatus.ACTIVE;
    this.created_at = data.created_at || new Date();
    this.updated_at = data.updated_at || new Date();
  }
}

export enum PostStatus {
  ACTIVE = 1,
  INACTIVE = 0,
}
