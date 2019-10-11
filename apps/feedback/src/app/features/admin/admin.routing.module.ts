import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleListComponent } from './module-list/component/module-list.component';
export const routes: Routes = [
  { path: "", redirectTo: "modules", pathMatch: "full" },
  {
    path: 'module',
    component: ModuleListComponent
  },
  {
    path: '**',
    component: ModuleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})

export class AdminRoutingModule { }
