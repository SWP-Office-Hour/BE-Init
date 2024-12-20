interface TeamType {
  id?: string;
  post_id: string;
  status?: number;
  created_at?: Date;
  updated_at?: Date;
}

export class TeamEntity {
  id?: string;
  post_id: string;
  status: number;
  created_at: Date;
  updated_at: Date;

  constructor(teamData: TeamType) {
    this.id = teamData.id;
    this.post_id = teamData.post_id;
    this.status = teamData.status || TeamStatus.ACTIVE;
    this.created_at = teamData.created_at || new Date();
    this.updated_at = teamData.updated_at || new Date();
  }
}

export enum TeamStatus {
  ACTIVE,
  INACTIVE,
  BANNED,
}
