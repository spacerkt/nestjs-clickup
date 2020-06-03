import { Injectable } from '@nestjs/common';
import { TaskProvider } from './providers/task.provider';

@Injectable()
export class ClickUpService {
  constructor(readonly task: TaskProvider) {}
}
