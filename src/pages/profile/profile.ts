import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { UserProfileProvider } from '../../providers/user-profile/user-profile';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage(
  {
  name: 'profile'
}
)
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public userProfile: any;
  //public birthDate: string;


  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,
  public UserProfileProvider: UserProfileProvider, public authProvider: AuthProvider) {
  }
ionViewDidEnter() {
  this.UserProfileProvider.getUserProfile().then( profileSnap => {
    this.userProfile = profileSnap;
   // this.birthDate = this.userProfile.birthDate;
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
logOut(){
  this.authProvider.logoutUser().then(() => {
   
    let loader = this.loadingCtrl.create({
      content: "un instant...",
      duration: 1000
    });
    loader.present();
  
    this.navCtrl.setRoot('login');
  });
}
updateName(){
  let alert = this.alertCtrl.create({
    message: "votre nom & prenom",
    inputs: [
      {
        name: 'nom',
        placeholder: 'votre nom',
        value: this.userProfile.nom
      },
      {
        name: 'prenom',
        placeholder: 'votre prenom',
        value: this.userProfile.prenom
      },
    ],
    buttons: [
      {
        text: 'annuler',
      },
      {
        text: 'modifier',
        handler: data => {
          this.UserProfileProvider.updateName(data.nom, data.prenom);
        }
      }
    ]
  });
  alert.present();
}
/*updateDOB(birthDate){
  this.UserProfileProvider.updateDOB(birthDate);
}*/
updateEmail(){
  let alert = this.alertCtrl.create({
    inputs: [
      {
        name: 'newEmail',
        placeholder: 'votre nouvelle email',
      },
      {
        name: 'password',
        placeholder: 'votre mot de passe',
        type: 'password'
      },
    ],
    buttons: [
      {
        text: 'annuler',
      },
      {
        text: 'modifier',
        handler: data => {
          this.UserProfileProvider.updateEmail(data.newEmail, data.password);
        }
      }
    ]
  });
  alert.present();
}

updatePassword(){
  let alert = this.alertCtrl.create({
    inputs: [
      {
        name: 'newPassword',
        placeholder: 'votre nouveau mot de passe',
        type: 'password'
      },
      {
        name: 'oldPassword',
        placeholder: 'votre mot de passe actuel',
        type: 'password'
      },
    ],
    buttons: [
      {
        text: 'annuler',
      },
      {
        text: 'modifier',
        handler: data => {
          this.UserProfileProvider.updatePassword(data.newPassword, data.oldPassword);
        }
      }
    ]
  });
  alert.present();
}
}
