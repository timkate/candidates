import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../app.shared.module';
import { ScorecardPage } from './scorecard.page';


const routes: Routes = [
  {
    path: '',
    component: ScorecardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScorecardPage,]
})
export class ScorecardPageModule {}
