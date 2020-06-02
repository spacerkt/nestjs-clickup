import { Module, DynamicModule } from '@nestjs/common';

import { ClickUpCoreModule } from './clickup-core.module';
import { ClickUpService } from './clickup.service';

import { ClickUpModuleOptions } from './interfaces/clickup.interface';

@Module({
  imports: [ClickUpCoreModule],
  providers: [ClickUpService],
  exports: [ClickUpService],
})
export class ClickUpModule {
  static forRoot(options: ClickUpModuleOptions): DynamicModule {
    return {
      module: ClickUpModule,
      imports: [ClickUpCoreModule.forRoot(options)],
      providers: [ClickUpService],
      exports: [ClickUpService],
    };
  }
}
