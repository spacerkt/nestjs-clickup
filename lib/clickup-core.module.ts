import { Module, DynamicModule, Provider } from '@nestjs/common';
import { TaskProvider } from './providers/task.provider';
import {
  ClickUpModuleOptions,
  ClickUpAsyncModuleOptions,
} from './interfaces/clickup.interface';
import { CLICKUP_OPTIONS } from './clickup.constants';
import { OAuthProvider } from './providers/oauth.provider';

@Module({})
export class ClickUpCoreModule {
  private static commonProviders(): Provider[] {
    return [TaskProvider, OAuthProvider];
  }

  static forRoot(options: ClickUpModuleOptions): DynamicModule {
    return {
      module: ClickUpCoreModule,
      providers: [
        {
          provide: CLICKUP_OPTIONS,
          useValue: options,
          inject: [CLICKUP_OPTIONS],
        },
        ...this.commonProviders(),
      ],
      exports: [TaskProvider],
    };
  }

  static forRootAsync(options: ClickUpAsyncModuleOptions): DynamicModule {
    return {
      module: ClickUpCoreModule,
      imports: options.imports || [],
      providers: [
        {
          provide: CLICKUP_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        ...this.commonProviders(),
      ],
      exports: [TaskProvider],
    };
  }
}
