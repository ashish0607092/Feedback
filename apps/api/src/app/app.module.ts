import { Module } from '@nestjs/common';
import { FeedbackModule } from './features/feedback/feedback.module';
import { AdminModule } from './features/admin/admin.module';
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/user/user.module';

@Module({
  imports: [FeedbackModule, AdminModule, AuthModule, UsersModule],
})
export class AppModule { }
