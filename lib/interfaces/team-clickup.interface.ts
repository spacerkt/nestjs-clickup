import { MemberClickUp } from './member-clickup.interface';
import { RoleClickUp } from './role-clickup.interface';

export interface TeamClickUp {
  id: string;
  name: string;
  color?: string;
  avatar?: string;
  members: MemberClickUp[];
  roles: RoleClickUp[];
}
