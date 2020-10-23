import { UserClickUp } from './user-clickup.interface';

interface MemberRole extends UserClickUp {
  role: number;
}

export interface MemberClickUp {
  user: MemberRole[];
}
