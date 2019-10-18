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
  invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    const r = parseInt(hex.slice(0, 2), 16) as any;
    const g = parseInt(hex.slice(2, 4), 16) as any;
    const b = parseInt(hex.slice(4, 6), 16) as any;
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? '#000000'
      : '#FFFFFF';
  }
  padZero(str, len?) {
    len = len || 2;
    const zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }
}
