import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { skillname } from '../../constants';
import { Candidate } from '../../candidate';
import { CandidateService } from '../../candidate.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  candidate$: Observable<Candidate>;

  isSummaryExpanded: boolean = true;

  
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

  _toggleExpandSummary(): void {
    this.isSummaryExpanded = !this.isSummaryExpanded;
  }
}
