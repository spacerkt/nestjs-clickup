import { Module, DynamicModule, Provider } from '@nestjs/common';
import {
  ClickUpModuleOptions,
  ClickUpAsyncModuleOptions,
} from './interfaces/clickup.interface';
import { CLICKUP_OPTIONS } from './clickup.constants';

import { TaskProvider } from './providers/task.provider';
import { OAuthProvider } from './providers/oauth.provider';
import { TeamProvider } from './providers/team.provider';

@Module({})
export class ClickUpCoreModule {
  private static commonProviders(): Provider[] {
    return [TaskProvider, OAuthProvider, TeamProvider];
  }

  private static commonExports(): Provider[] {
    return this.commonProviders();
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
      exports: this.commonExports(),
    };
  }

  static forRootAsync(options: ClickUpAsyncModuleOptions): DynamicModule {
    return {
      module: ClickUpCoreModule,
      imports: options.imports ?? [],
      providers: [
        {
          provide: CLICKUP_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject ?? [],
        },
        ...this.commonProviders(),
      ],
      exports: this.commonExports(),
    };
  }
}
