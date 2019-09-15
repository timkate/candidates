import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Candidate } from '../../candidate';
import { CandidateService } from '../../candidate.service';


@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.page.html',
  styleUrls: ['./assessments.page.scss'],
})
export class AssessmentsPage implements OnInit {
  candidate$: Observable<Candidate>;
  isAssessmentExpanded: boolean = true;
  isVideoInterviewExpanded: boolean = true;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CandidateService,
    public modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.candidate$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCandidate(params.get('id')))
    );
  }

  
  _onClickVideo() {
  }

  _toggleExpandAssessment() {
    this.isAssessmentExpanded = !this.isAssessmentExpanded;
  }

  _toggleExpandVideoInterview() {
    this.isVideoInterviewExpanded = !this.isVideoInterviewExpanded;
  }
}
