import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
//native component
import {Camera} from '@ionic-native/camera';

import { MyApp } from './app.component';

//pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { LoginPage } from '../pages/login/login';



//data source
import {AngularFireModule} from "angularfire2";
//fileupload
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';


import { AngularFireAuth } from 'angularfire2/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { LoginPageModule } from "../pages/login/login.module";
import { AuthProvider } from '../providers/auth/auth';
import { HomePageModule } from "../pages/home/home.module";
import { ProfilePageModule } from "../pages/profile/profile.module";
import { ProfilePage } from "../pages/profile/profile";
import { UserProfileProvider } from '../providers/user-profile/user-profile';

import { OgarViePageModule } from "../pages/ogar-vie/ogar-vie.module";
import { OgarAssurancesPageModule } from "../pages/ogar-assurances/ogar-assurances.module";
import { GoPageModule } from "../pages/go/go.module";






@NgModule({
  declarations: [
    MyApp,
    ListPage,
  
  
    
   

  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    HomePageModule,
    ProfilePageModule,
    OgarAssurancesPageModule,
    OgarViePageModule,
    GoPageModule,
     HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    HomePage,
    ProfilePage,
    LoginPage
  
  
  ],
  providers: [
     File,
    Transfer,
    Camera,
    FilePath,
    StatusBar,
    SplashScreen,
    AngularFireAuth,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProfileProvider
    
  ],
 
 
})
export class AppModule {}
