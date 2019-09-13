import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  candidates$: Observable<Candidate[]>;
  selectedID: number;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CandidateService,
  ) {}

  ngOnInit() {
    this.candidates$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedID = +params.get('id');
        return this.service.getCandidates();
      })
    );
  }

  _onClickCandidate(candidate:Candidate) {
    this.router.navigate(['/details/', candidate.id]);
  }
}
