import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { OverviewPage } from './overview.page';

import { ComponentsModule } from '../../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: OverviewPage
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
  declarations: [OverviewPage]
})
export class OverviewPageModule {}
