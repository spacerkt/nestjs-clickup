import { Injectable } from '@nestjs/common';
import { OAuthProvider } from './providers/oauth.provider';
import { TaskProvider } from './providers/task.provider';
import { TeamProvider } from './providers/team.provider';

@Injectable()
export class ClickUpService {
  constructor(
    readonly task: TaskProvider,
    readonly oauth: OAuthProvider,
    readonly team: TeamProvider,
  ) {}
}
