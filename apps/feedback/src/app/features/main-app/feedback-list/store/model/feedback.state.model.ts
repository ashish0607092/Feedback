import { Feedback } from '@feedback-workspace/api-interfaces';
export class FeedbackStateModel {
  feedbackLoading: boolean;
  feedbackCreated: boolean;
  feedbackDeleted: boolean;
  feedback: Array<Feedback>;
}
