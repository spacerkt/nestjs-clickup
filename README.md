# Project

NestJS Module to access ClickUP API

## Features

- CRUD Task

## Incoming Features



## Why this module have only these features?

This project was initialized based on one requirement: create an task in Clickup based on an event. Because of that, right now it's the only feature implemented. Feel free to add more features, send us your pull request!

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
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('CLICKUP_TOKEN')
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
