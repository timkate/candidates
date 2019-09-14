import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { skillname, skilltagcolor } from '../../constants';
import { Candidate } from '../../candidate';
import { CandidateService } from '../../candidate.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  candidate$: Observable<Candidate>;
  skillname: Array<string>;
  skilltagcolor: Array<string>;
  isSummaryExpanded: boolean = true;

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CandidateService,
  ) {
    this.skillname = skillname;
    this.skilltagcolor = skilltagcolor;
  }

  ngOnInit() {
    this.candidate$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCandidate(params.get('id')))
    );
  }

  _toggleExpandSummary(): void {
    this.isSummaryExpanded = !this.isSummaryExpanded;
  }

  _onClickScore(): void {
    console.log('OverviewPage._onClickScore()::', 'this.route', this.route);
    this.router.navigate(['scorecard'], {relativeTo: this.route.parent});
  }
}
