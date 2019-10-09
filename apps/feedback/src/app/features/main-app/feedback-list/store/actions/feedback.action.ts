import { Feedback } from '@feedback-workspace/api-interfaces';

export class GetAllFeedback {
  static readonly type = '[Feedback] GET_ALL_FEEDBACK';
}
export class GetAllFeedbackSuccess {
  static readonly type = '[Feedback] GET_ALL_FEEDBACK_SUCCESS';
  constructor(public feedback: Array<Feedback>) { }
}
export class GetAllFeedbackFailed {
  static readonly type = '[Feedback] GET_ALL_FEEDBACK_FAILED';
}
export class CreateFeedback {
  static readonly type = '[Feedback] CREATE_FEEDBACK';
  constructor(public createFeedbackPayload: Feedback) {
  }
}
export class DeleteFeedback {
  static readonly type = '[Feedback] DELETE_FEEDBACK';
  constructor(public id: string) {
  }
}
