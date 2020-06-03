import { Module, DynamicModule } from '@nestjs/common';
import { TaskProvider } from './providers/task.provider';
import {
  ClickUpModuleOptions,
  ClickUpAsyncModuleOptions,
} from './interfaces/clickup.interface';
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

  static forRootAsync(options: ClickUpAsyncModuleOptions): DynamicModule {
    let inject: any[] = [CLICKUP_OPTIONS];
    if (options.inject) {
      inject = inject.concat(options.inject);
    }
    return {
      module: ClickUpCoreModule,
      imports: options.imports,
      providers: [
        {
          provide: CLICKUP_OPTIONS,
          useFactory: options.useFactory,
          inject,
        },
        TaskProvider,
      ],
      exports: [TaskProvider],
    };
  }
}
