import { Module, DynamicModule } from '@nestjs/common';
import { TaskProvider } from './providers/task.provider';
import { ClickUpModuleOptions } from './interfaces/clickup.interface';
import { CLICKUP_OPTIONS } from './clickup.constants';

@Module({})
export class ClickUpCoreModule {
  static forRoot(options: ClickUpModuleOptions): DynamicModule {
    return {
      module: ClickUpCoreModule,
      providers: [
        {
          provide: CLICKUP_OPTIONS,
          useValue: options,
          inject: [CLICKUP_OPTIONS],
        },
        TaskProvider,
      ],
      exports: [TaskProvider],
    };
  }
}
