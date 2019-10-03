import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  { path: "", redirectTo: "app", pathMatch: "full" },
  {
    path: 'app',
    loadChildren: () => import('./features/main-app/main-app.module').then(m => m.MainAppModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '**',
    loadChildren: () => import('./features/main-app/main-app.module').then(m => m.MainAppModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
