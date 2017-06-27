import { Component,NgZone, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import firebase from 'firebase';
import { ProfilePage } from "../pages/profile/profile";
import { GoPage } from "../pages/go/go";




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  zone:NgZone;

  pages: Array<{color:string,icon:string,title: string, component: any,badge:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    firebase.initializeApp({
    apiKey: "AIzaSyDbPWa18BvHiEEXdwUK5YiVP5UoA17aDD8",
    authDomain: "ogarlink-505ba.firebaseapp.com",
    databaseURL: "https://ogarlink-505ba.firebaseio.com",
    projectId: "ogarlink-505ba",
    storageBucket: "",
    messagingSenderId: "473989065889"
    });
    this.initializeApp();
    this.zone = new NgZone({});
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    this.zone.run( () => {
    if (!user) {
      this.rootPage = 'login';
      unsubscribe();
    } else { 
      this.rootPage = GoPage;
      unsubscribe();
    }
  });     
});
    // used for an example of ngFor and navigation--control le menu deroulant --
    this.pages = [
      {color:'light', icon:'home', title: 'Acceuil', component: HomePage,badge:''},
      {color:'light', icon:'contact', title: 'Profil', component:ProfilePage ,badge:''},
      {color:'light', icon:'apps',title: 'categories', component: ListPage,badge:'5' },
      {color:'light', icon:'filing',title: 'produits', component: LoginPage,badge:'3' },
      {color:'light', icon:'md-paper',title: 'actualite', component: ListPage,badge:'nouveaux' },
      {color:'light', icon:'notifications',title: 'notifications', component: ListPage,badge:'25' },
      {color:'light', icon:'albums',title: 'Agences', component: ListPage,badge:'' },
      {color:'light', icon:'send',title: 'Campagne sms', component: ListPage,badge:'' },
      {color:'light', icon:'log-out',title: 'deconnexion', component: LoginPage,badge:'' },
    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
