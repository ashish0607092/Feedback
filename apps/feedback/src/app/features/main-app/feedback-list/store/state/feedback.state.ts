import { State, Selector, Action, StateContext } from "@ngxs/store";
import { tap, catchError } from 'rxjs/operators';
import * as HttpStatus from 'http-status-codes'
import { FeedbackStateModel } from '../model/feedback.state.model';
import { AppState } from '../../../../../app.state.model';
import { GetAllFeedback, GetAllFeedbackSuccess, GetAllFeedbackFailed } from '../actions/feedback.action';
import { FeedbackService } from '../service/feedback.service';

@State<FeedbackStateModel>({
  name: AppState.feedback,
  defaults: {
    feedbackLoading: false,
    feedback: []
  }
})
export class FeedbackState {
  constructor(private feedbackService: FeedbackService) { }
  @Selector()
  static isFeedbackLoading(state: FeedbackStateModel) {
    return state.feedbackLoading;
  }
  @Selector()
  static getAllFeedback(state: FeedbackStateModel) {
    return state.feedback || [];
  }
  /**Commands */
  @Action(GetAllFeedback)
  getAllFeedback(ctx: StateContext<FeedbackStateModel>) {
    ctx.patchState({
      feedbackLoading: true
    })
    return this.feedbackService.getAllFeedback().pipe(
      tap(res => {
        if (res.statusCode === HttpStatus.OK && res.data !== null) {
          return ctx.dispatch(new GetAllFeedbackSuccess(res.data));
        } else {
          return ctx.dispatch(new GetAllFeedbackFailed());
        }
      }),
      catchError(err => {
        return ctx.dispatch(new GetAllFeedbackFailed());
      })
    );
  }
  /**Events */
  @Action(GetAllFeedbackSuccess)
  setStateOnGetAllFeedbackSuccess(ctx: StateContext<FeedbackStateModel>, event: GetAllFeedbackSuccess) {
    ctx.patchState({
      feedbackLoading: false,
      feedback: event.feedback
    })
  }
  @Action(GetAllFeedbackFailed)
  setStateOnGetAllFeedbackFailed(ctx: StateContext<FeedbackStateModel>) {
    ctx.patchState({
      feedbackLoading: false,
      feedback: []
    })
  }
}
