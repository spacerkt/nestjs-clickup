import { Inject, Injectable } from '@nestjs/common';
import { BASE_URL, CLICKUP_OPTIONS } from '../clickup.constants';
import { ClickUpModuleOptions } from '../interfaces';
import { TeamClickUp } from '../interfaces/team-clickup.interface';
import { BaseProvider } from './base.provider';

interface TeamApiResponse {
  teams: TeamClickUp[];
}

@Injectable()
export class TeamProvider extends BaseProvider {
  constructor(@Inject(CLICKUP_OPTIONS) options: ClickUpModuleOptions) {
    super(options);
  }

  private baseUrl() {
    return `${BASE_URL}/team`;
  }

  fetch(): Promise<TeamClickUp[]> {
    return new Promise<TeamClickUp[]>((resolve, reject) =>
      this.axios
        .get<TeamApiResponse>(this.baseUrl())
        .then(res => resolve(res.data.teams))
        .catch(err => reject(err)),
    );
  }
}
