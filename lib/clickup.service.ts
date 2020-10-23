import { Injectable } from '@nestjs/common';
import { OAuthProvider } from './providers/oauth.provider';
import { TaskProvider } from './providers/task.provider';

@Injectable()
export class ClickUpService {
  constructor(readonly task: TaskProvider, readonly oauth: OAuthProvider) {}
}
