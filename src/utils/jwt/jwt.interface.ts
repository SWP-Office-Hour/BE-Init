import { UserRole } from 'src/users/models/user.dto';

export interface JwtPayload {
  user_id: string;
  role: UserRole;
}
