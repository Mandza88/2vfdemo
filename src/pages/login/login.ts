import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, LoadingController,AlertController } from 'ionic-angular';
import { User } from "../../app/models/user";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { AuthProvider } from '../../providers/auth/auth';
import {AngularFireAuth} from 'angularfire2/auth';
import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage(
  {
    name:'login'
  }
)
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {
 public loginForm:FormGroup;
public loading:Loading;
 user  = {} as User;
  constructor(public loadingCtrl: LoadingController,private afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams , public alertCtrl: AlertController, 
    public authProvider: AuthProvider, public formBuilder: FormBuilder) {
      //initialize our form
      this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, 
        EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), 
        Validators.required])]
    });
  }
loginUser(): void {
  if (!this.loginForm.valid){
    console.log(this.loginForm.value);
  } else {
    this.authProvider.loginUser(this.loginForm.value.email, 
        this.loginForm.value.password)
    .then( authData => {
      this.loading.dismiss().then( () => {
        this.navCtrl.setRoot(HomePage);
      });
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message:"mot de passe ou email incorrect",
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
    console.log('ionViewDidLoad LoginPage');
  }
  goToSignup(): void { this.navCtrl.push('register'); }

goToResetPassword(): void { this.navCtrl.push('reset'); }
 /* async login(user:User){
    try{
    const result= await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
    if(result){
      this.navCtrl.setRoot('AcceuilPage');
    }
  }
  catch(e){
    console.error(e);
    alert('faux');
  }
  }
  register(){
    this.navCtrl.push('RegisterPage');
  }
  */
}
