import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { User } from "../../app/models/user";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { HomePage } from "../home/home";

/**
 * Generated class for the ResetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage(
  {
    name:'reset'
  }
)
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
  resetPasswordForm: FormGroup;

  usersService: any;

  user = {} as User;
  constructor(private LoadingController:LoadingController,public navCtrl: NavController, public navParams: NavParams,public authProvider: AuthProvider,
    public formBuilder: FormBuilder,public alertCtrl: AlertController) {
      this.resetPasswordForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, 
            EmailValidator.isValid])],
      });
  }
 resetPassword(){
  if (!this.resetPasswordForm.valid){
    console.log(this.resetPasswordForm.value);
  } else {
    this.authProvider.resetPassword(this.resetPasswordForm.value.email)
    .then((user) => {
      let alert = this.alertCtrl.create({
        message: "un email vient de vous etes envoye verifier votre boite mail",
        buttons: [
          {
            text: "Ok",
            role: 'cancel',
            handler: () => { this.navCtrl.pop(); }
          }
        ]
      });
      alert.present();

    }, (error) => {
      var errorMessage: string = error.message;
      let errorAlert = this.alertCtrl.create({
        message: errorMessage,
        buttons: [{ text: "Ok", role: 'cancel' }]
      });
      errorAlert.present();
    });
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }

}
