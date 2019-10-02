import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { FeedbackController } from './controller/feedback.controller';
import { FeedbackService } from './service/feedback.service';
import { feedbackProviders } from './feedback.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FeedbackController],
  providers: [FeedbackService, ...feedbackProviders]
})
export class FeedbackModule { }
