import { Module } from '@nestjs/common';
import { FeedbackModule } from './features/feedback/feedback.module';
import { AdminModule } from './features/admin/admin.module';

@Module({
  imports: [FeedbackModule, AdminModule],
})
export class AppModule { }
