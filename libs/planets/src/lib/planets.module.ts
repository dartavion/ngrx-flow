import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PlanetsComponent } from './components/planets/planets.component';

export const planetsRoutes: Route[] = [
  {
    path: '',
    component: PlanetsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(planetsRoutes)],
  declarations: [PlanetsComponent],
})
export class PlanetsModule {}
