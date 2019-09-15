import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.page.html',
  styleUrls: ['./candidate.page.scss'],
})
export class CandidatePage implements OnInit {
  candidate$: Observable<Candidate>;

  
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private service: CandidateService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.candidate$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCandidate(params.get('id')))
    );
  }


  _onClickBack() {
    if (this.router.url.includes('scorecard')) {
      this.location.back();
    } else {
      this.router.navigate(['home']);
    }
  }
}
