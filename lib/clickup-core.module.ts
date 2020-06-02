import { Module, DynamicModule } from '@nestjs/common';
import { TaskProvider } from './providers/task.provider';
import { ClickUpModuleOptions } from './interfaces/clickup.interface';
import { CLICKUP_OPTIONS } from './clickup.constants';

@Module({ providers: [TaskProvider] })
export class ClickUpCoreModule {
  static forRoot(options: ClickUpModuleOptions): DynamicModule {
    return {
      module: ClickUpCoreModule,
      providers: [
        { provide: CLICKUP_OPTIONS, useValue: options },
        TaskProvider,
      ],
      exports: [TaskProvider],
    };
  }
}
