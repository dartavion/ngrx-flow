import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { PeopleEffects } from './people.effects';
import * as PeopleActions from './people.actions';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PeopleEffects', () => {
  let actions: Observable<any>;
  let effects: PeopleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NxModule.forRoot()],
      providers: [
        PeopleEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PeopleEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PeopleActions.init() });

      const expected = hot('-a-|', {
        a: PeopleActions.loadPeopleSuccess({ people: {id: '', count: 0, results: [], previous: '', next: ''} }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
