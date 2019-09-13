import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  candidate$: Observable<Candidate>;

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CandidateService
  ) {}

  ngOnInit() {
    this.candidate$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCandidate(params.get('id')))
    );
  }


  _gotoHome() {
    this.router.navigate(['/']);
  }
}
