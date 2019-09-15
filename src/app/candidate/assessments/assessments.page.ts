import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
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
    private videoPlayer: VideoPlayer,
    public modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.candidate$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCandidate(params.get('id')))
    );
  }

  
  _onClickVideo() {
    this.videoPlayer.play('file:///Volumes/Data/Workspace/_Backup/themeforest.net/_freedownloads/iconic-icelandic-landscape-AJHC5S7.mov').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

  _onClickScoreCard() {
    this.router.navigate(["../../../scorecard"], {relativeTo: this.route});
  }

  _toggleExpandAssessment() {
    this.isAssessmentExpanded = !this.isAssessmentExpanded;
  }

  _toggleExpandVideoInterview() {
    this.isVideoInterviewExpanded = !this.isVideoInterviewExpanded;
  }
}
