interface TeamMemberType {
  id?: string;
  team_id: string;
  user_id: string;
  status?: number;
  leave_at?: Date;
  added_to_team_at?: Date;
}

export class TeamMemberEntity {
  id?: string;
  team_id: string;
  user_id: string;
  status: number;
  added_to_team_at: Date;
  leave_at?: Date;

  constructor(data: TeamMemberType) {
    this.id = data.id;
    this.team_id = data.team_id;
    this.user_id = data.user_id;
    this.status = data.status || TeamMemberStatus.JOINED;
    this.added_to_team_at = data.added_to_team_at || new Date();
    this.leave_at = null;
  }
}

export enum TeamMemberStatus {
  JOINED,
  LEFT,
}
