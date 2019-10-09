import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { CreateFeedback } from '../feedback-list/store/actions/feedback.action';
import { Feedback } from '@feedback-workspace/api-interfaces';
import { FeedbackState } from '../feedback-list/store/state/feedback.state';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.scss']
})
export class CreateFeedbackComponent implements OnInit, OnDestroy {
  moduleName = "Select Module";
  feedbackControl = new FormControl('', Validators.required);
  @Select(FeedbackState.isFeedbackCreated) isFeedbackCreated$;
  private createFeedbackSubs = new SubSink();
  constructor(private store: Store) { }

  ngOnInit() {
    this.createFeedbackSubs.add(this.isFeedbackCreated$.subscribe(val => {
      if (val) {
        this.feedbackControl.setValue('');
        this.moduleName = "Select Module";
        this.feedbackControl.setErrors(null);
      }
    }))
  }
  menuClosed(menu) {
    this.moduleName = menu;
  }
  addFeedback() {
    const feedbackPayload: Feedback = {
      feedback: this.feedback,
      module: this.moduleName !== 'Select Module' ? this.moduleName : ''
    }
    this.store.dispatch(new CreateFeedback(feedbackPayload)).subscribe(val => {
      if (val) {
        console.log(val.feedback);
      }
    });

  }
  get feedback() {
    return this.feedbackControl.value;
  }
  ngOnDestroy() {
    this.createFeedbackSubs.unsubscribe();
  }
}
