import { Feedback } from '@feedback-workspace/api-interfaces';
export class FeedbackStateModel {
  feedbackLoading: boolean;
  feedback: Array<Feedback>;
}
