import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { CreateFeedback } from '../feedback-list/store/actions/feedback.action';
import { Feedback } from '@feedback-workspace/api-interfaces';
import { FeedbackState } from '../feedback-list/store/state/feedback.state';
import { SubSink } from 'subsink';
import { GetAllModule } from '../../admin/module-list/store/actions/module.action';
import { ModuleState } from '../../admin/module-list/store/state/module.state';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.scss']
})
export class CreateFeedbackComponent implements OnInit, OnDestroy {
  moduleName = "Select Module";
  moduleColor ='';
  feedbackControl = new FormControl('', Validators.required);
  @Select(FeedbackState.isFeedbackCreated) isFeedbackCreated$;
  @Select(ModuleState.getAllModule) getAllModule$;
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
    this.store.dispatch(new GetAllModule());

  }
  menuClosed(menu) {
    this.moduleName = menu.name;
    this.moduleColor = menu.colorCode;
  }
  addFeedback() {
    const feedbackPayload: Feedback = {
      feedback: this.feedback,
      module: this.moduleName !== 'Select Module' ? this.moduleName : '',
      moduleColor:this.moduleColor !== '' ? this.moduleColor : '#4363d8',
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
