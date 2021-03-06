import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CandidatePageRoutingModule } from './candidate.router.module';
import { ComponentsModule } from '../components/components.module';

import { CandidatePage } from './candidate.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CandidatePage]
})
export class CandidatePageModule {}
