import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Candidate } from './candidate';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  candidates: Array<Candidate>;


  constructor() {
    // ...fetch from API call
    this.candidates = [
      {
        id: 0,
        name: 'Sizwe Nkumalo',
        description: 'CEO @ Hello Crowd',
        avatar: './assets/avatars/avatar0.png',
      },
      {
        id: 1,
        name: 'Sizwe Nkumalo',
        description: 'CEO @ Hello Crowd',
        avatar: './assets/avatars/avatar0.png',
      },
      {
        id: 2,
        name: 'Sizwe Nkumalo',
        description: 'CEO @ Hello Crowd',
        avatar: './assets/avatars/avatar0.png',
      },
      {
        id: 3,
        name: 'Sizwe Nkumalo',
        description: 'CEO @ Hello Crowd',
        avatar: './assets/avatars/avatar0.png',
      },
      {
        id: 4,
        name: 'Sizwe Nkumalo',
        description: 'CEO @ Hello Crowd',
        avatar: './assets/avatars/avatar0.png',
      },
      {
        id: 5,
        name: 'Sizwe Nkumalo',
        description: 'CEO @ Hello Crowd',
        avatar: './assets/avatars/avatar0.png',
      },
      {
        id: 6,
        name: 'Sizwe Nkumalo',
        description: 'CEO @ Hello Crowd',
        avatar: './assets/avatars/avatar0.png',
      },
      {
        id: 7,
        name: 'Sizwe Nkumalo',
        description: 'CEO @ Hello Crowd',
        avatar: './assets/avatars/avatar0.png',
      },
    ];
  }

  getCandidates(): Observable<Candidate[]> {
    return of(this.candidates);
  }

  getCandidate(id: number | string) {
    return this.getCandidates().pipe(
      // (+) before `id` turns the string into a number
      map((candidates: Candidate[]) => this.candidates.find(candidate => candidate.id === +id))
    );
  }
}
