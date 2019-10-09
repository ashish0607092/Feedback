import { State, Selector, Action, StateContext } from "@ngxs/store";
import { tap, catchError } from 'rxjs/operators';
import * as HttpStatus from 'http-status-codes'
import { FeedbackStateModel } from '../model/feedback.state.model';
import { AppState } from '../../../../../app.state.model';
import { GetAllFeedback, GetAllFeedbackSuccess, GetAllFeedbackFailed, CreateFeedback, DeleteFeedback } from '../actions/feedback.action';
import { FeedbackService } from '../service/feedback.service';

@State<FeedbackStateModel>({
  name: AppState.feedback,
  defaults: {
    feedbackLoading: false,
    feedback: [],
    feedbackCreated: false,
    feedbackDeleted: false
  }
})
export class FeedbackState {
  constructor(private feedbackService: FeedbackService) { }
  @Selector()
  static isFeedbackLoading(state: FeedbackStateModel) {
    return state.feedbackLoading;
  }
  @Selector()
  static isFeedbackCreated(state: FeedbackStateModel) {
    return state.feedbackCreated;
  }
  @Selector()
  static getAllFeedback(state: FeedbackStateModel) {
    return state.feedback || [];
  }
  /**Commands */
  @Action(GetAllFeedback)
  getAllFeedback(ctx: StateContext<FeedbackStateModel>) {
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
  @Action(CreateFeedback)
  createFeedback(ctx: StateContext<FeedbackStateModel>, event: CreateFeedback) {
    ctx.patchState({
      feedbackLoading: true
    })
    return this.feedbackService.createFeedback(event.createFeedbackPayload).pipe(
      tap(res => {
        if (res.status === HttpStatus.CREATED) {
          ctx.patchState({
            feedbackLoading: false,
            feedbackCreated: true,
          })
          ctx.dispatch(new GetAllFeedback());
          this.resetValue(ctx, { feedbackCreated: false });
        } else {
          ctx.patchState({
            feedbackLoading: false
          })
        }
      }),
      catchError(err => {
        return err;
      })
    );
  } @Action(DeleteFeedback)
  deleteFeedback(ctx: StateContext<FeedbackStateModel>, event: DeleteFeedback) {
    ctx.patchState({
      feedbackLoading: true
    })
    return this.feedbackService.deleteFeedback(event.id).pipe(
      tap(res => {
        if (res.status === HttpStatus.OK) {
          ctx.patchState({
            feedbackLoading: false,
            feedbackDeleted: true,
          })
          ctx.dispatch(new GetAllFeedback());
          this.resetValue(ctx, { feedbackDeleted: false });
        } else {
          ctx.patchState({
            feedbackLoading: false
          })
        }
      }),
      catchError(err => {
        return err;
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
  private resetValue(ctx, value) {
    setTimeout(() => {
      ctx.patchState(value)
    }, 1000)
  }
}
