import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OgarViePage } from "../ogar-vie/ogar-vie";
import { OgarAssurancesPage } from "../ogar-assurances/ogar-assurances";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 menu: string = "mbolo";
isAndroid: boolean = false;
  constructor(public navCtrl: NavController) {

  }
  openVie(){
    this.navCtrl.setRoot(OgarViePage);
  }
  openAssurances(){
    this.navCtrl.setRoot(OgarAssurancesPage);
  }

}
