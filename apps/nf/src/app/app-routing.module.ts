import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'people'
  },
  {
    path: 'people',
    loadChildren: () => import('@ngrx-flow/people').then(mod => mod.PeopleModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('@ngrx-flow/planets').then(mod => mod.PlanetsModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
