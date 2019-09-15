import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AssessmentsPage } from './assessments.page';

import { ComponentsModule } from '../../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: AssessmentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssessmentsPage]
})
export class AssessmentsPageModule {}
