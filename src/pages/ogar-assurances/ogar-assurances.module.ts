import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OgarAssurancesPage } from './ogar-assurances';

@NgModule({
  declarations: [
    OgarAssurancesPage,
  ],
  imports: [
    IonicPageModule.forChild(OgarAssurancesPage),
  ],
  exports: [
    OgarAssurancesPage
  ]
})
export class OgarAssurancesPageModule {}
