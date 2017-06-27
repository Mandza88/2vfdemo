import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoPage } from './go';

@NgModule({
  declarations: [
    GoPage,
  ],
  imports: [
    IonicPageModule.forChild(GoPage),
  ],
  exports: [
    GoPage
  ]
})
export class GoPageModule {}
