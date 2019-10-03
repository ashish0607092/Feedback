import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FeedbackListComponent } from './feedback-list/component/feedback-list.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
export const routes: Routes = [
  { path: "", redirectTo: "feedback", pathMatch: "full" },
  {
    path: 'feedback',
    component: FeedbackListComponent
  },
  {
    path: 'create-feedback',
    component: CreateFeedbackComponent

  },
  {
    path: '**',
    component: FeedbackListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})

export class MainAppRoutingModule { }
