import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetAllFeedback } from '../store/actions/feedback.action';
import { FeedbackState } from '../store/state/feedback.state';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent implements OnInit {
  @Select(FeedbackState.getAllFeedback) getAllFeedback$;
  @Select(FeedbackState.isFeedbackLoading) isFeedbackLoading$;
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetAllFeedback());
  }


}
