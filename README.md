# Project

NestJS Module to access ClickUP API

## Features

- CRUD Task

- OAuth

- Team

## Incoming Features



## Why this module have only these features?

This project was initialized based on one requirement: create an task in Clickup based on an event. That been saied, new features and improvements are added quite slowly. Feel free to contribute, send us your pull request!

## Installation

```bash
$ npm ci
```

## Examples

### Configure async

```typescript
@Module({
  imports: [
    ClickUpModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('CLICKUP_TOKEN')
        client_id: configService.get<string>('CLICKUP_CLIENT_ID'), // only required for oauth flow
        secret: configService.get<string>('CLICKUP_SECRET') // only required for oauth flow
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [FeedbackService],
})
export class FeedbackModule {}
```

### Create a task

```typescript
@Injectable()
export class FeedbackService {
  constructor(private readonly clickupService: ClickUpService) {}

  async createFeedback(feedbackDto: FeedbackDto) {
     // create feedback locally then create as task in feedback list
     await this.clickupService.task.create(feedbackListId, {
       name: "New Feedback",
       content: feedbackDto.message
     });
  }
```

## License

  [MIT licensed](LICENSE).
