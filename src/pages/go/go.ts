import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
/**
 * Generated class for the GoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage(
   {
    name:'go'
  }
)
@Component({
  selector: 'page-go',
  templateUrl: 'go.html',
})
export class GoPage {
 resetPasswordForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoPage');
  }

}
