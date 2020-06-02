import { Injectable } from '@nestjs/common';
import { TaskProvider } from './providers/task.provider';

@Injectable()
export class ClickUpService {
  constructor(private readonly taskProvider: TaskProvider) {}

  get task(): TaskProvider {
    return this.taskProvider;
  }
}
