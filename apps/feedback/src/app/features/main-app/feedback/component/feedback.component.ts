import { Component, OnInit, Input } from '@angular/core';
import { Feedback } from '@feedback-workspace/api-interfaces';
import { Store } from '@ngxs/store';
import { DeleteFeedback } from '../../feedback-list/store/actions/feedback.action';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  @Input() feedback: Feedback;
  constructor(private store: Store) { }

  ngOnInit() {
  }
  deleteFeedback(feedback) {
    this.store.dispatch(new DeleteFeedback(feedback._id))
    console.log(feedback)
  }

}
