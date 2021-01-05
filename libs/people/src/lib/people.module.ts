import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPeople from './+state/people.reducer';
import { PeopleEffects } from './+state/people.effects';
import { PeopleFacade } from './+state/people.facade';

export const peopleRoutes: Route[] = [
  {
    path: '',
    component: PeopleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(peopleRoutes),
    StoreModule.forFeature(fromPeople.PEOPLE_FEATURE_KEY, fromPeople.reducer),
    EffectsModule.forFeature([PeopleEffects]),
  ],
  declarations: [PeopleComponent],
  providers: [PeopleFacade],
})
export class PeopleModule {}
