import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/component/feedback.component';
import { FeedbackListComponent } from './feedback-list/component/feedback-list.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { MainAppRoutingModule } from './main-app-routing.module';
import { MaterialModule } from '../../common/material/material.module';
import { NgxsModule } from '@ngxs/store';
import { FeedbackState } from './feedback-list/store/state/feedback.state';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleState } from '../admin/module-list/store/state/module.state';


@NgModule({
  declarations: [FeedbackComponent,
    FeedbackListComponent,
    CreateFeedbackComponent],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    MaterialModule,
    NgxsModule.forFeature([FeedbackState,
      ModuleState]),
    ReactiveFormsModule
  ],
  exports: [
    FeedbackComponent,
  ]
})
export class MainAppModule { }
