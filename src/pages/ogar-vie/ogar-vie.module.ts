import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OgarViePage } from './ogar-vie';

@NgModule({
  declarations: [
    OgarViePage,
  ],
  imports: [
    IonicPageModule.forChild(OgarViePage),
  ],
  exports: [
    OgarViePage
  ]
})
export class OgarViePageModule {}
