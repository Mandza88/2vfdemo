import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,Loading,AlertController } from 'ionic-angular';
import { User } from "../../app/models/user";
import {AngularFireAuth} from 'angularfire2/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage(
  {
    name:'register'
  }
)
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public signupForm: FormGroup;
  loading: Loading;
  user = {} as User;
 
  constructor(public loadingCtrl: LoadingController,private afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams,public authProvider: AuthProvider,
    public formBuilder: FormBuilder, 
    public alertCtrl: AlertController) {
            this.signupForm = formBuilder.group({
       nom: ['', Validators.compose([Validators.required, Validators.required])],
       prenom: ['', Validators.compose([Validators.required, Validators.required])],       
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
  }
signupUser(){
  if (!this.signupForm.valid){
    console.log(this.signupForm.value);
  } else {
    this.authProvider.signupUser(this.signupForm.value.nom, 
        this.signupForm.value.prenom,this.signupForm.value.email, 
        this.signupForm.value.password)
    .then(() => {
      this.loading.dismiss().then( () => {
        this.navCtrl.setRoot(LoginPage);
      });
    }, (error) => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message:"cette adresse email exist deja",
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
