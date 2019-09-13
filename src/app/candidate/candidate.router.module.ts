import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidatePage } from './candidate.page';


const routes: Routes = [
  {
    path: '',
    component: CandidatePage,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        children: [
          {
            path: '',
            loadChildren: () => import('./overview/overview.module').then(m => m.OverviewPageModule)
          },
        ],
      },
      {
        path: 'questions',
        children: [
          {
            path: '',
            loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsPageModule)
          },
        ],
      },
      {
        path: 'assessments',
        children: [
          {
            path: '',
            loadChildren: () => import('./assessments/assessments.module').then(m => m.AssessmentsPageModule)
          },
        ],
      },
      {
        path: 'scorecard',
        children: [
          {
            path: '',
            loadChildren: () => import('./scorecard/scorecard.module').then(m => m.ScorecardPageModule)
          },
        ],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatePageRoutingModule {}
