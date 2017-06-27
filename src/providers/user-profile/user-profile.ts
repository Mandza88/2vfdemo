import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the UserProfileProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProfileProvider {

  constructor(public http: Http) {
    console.log('Hello UserProfileProvider Provider');
  }
  //function that returns the user’s profile from the database
  getUserProfile(): Promise<any> {
  return new Promise( (resolve, reject) => {
    firebase.database().ref('/userProfile')
    .child(firebase.auth().currentUser.uid)
    .on('value', data => {
      resolve(data.val());
    });
  });
}
// function to update the user’s name
updateName(nom: string, prenom: string): firebase.Promise<any> {
  return firebase.database().ref('/userProfile')
  .child(firebase.auth().currentUser.uid).update({
    nom: nom,
    prenom: prenom,
  });
}
// function that update user email 
updateEmail(newEmail: string, password: string): firebase.Promise<any> {
    const credential =  firebase.auth.EmailAuthProvider
        .credential(firebase.auth().currentUser.email, password);

  return firebase.auth().currentUser.reauthenticateWithCredential(credential)
  .then( user => {
    firebase.auth().currentUser.updateEmail(newEmail).then( user => {
        firebase.database().ref('/userProfile')
        .child(firebase.auth().currentUser.uid).update({ email: newEmail });
    });
  });
}
// function that update user password
updatePassword(newPass: string, oldPassword: string): firebase.Promise<any> {
    const credential =  firebase.auth.EmailAuthProvider
        .credential(firebase.auth().currentUser.email, oldPassword);

    return firebase.auth().currentUser.reauthenticateWithCredential(credential)
    .then( user => {
        firebase.auth().currentUser.updatePassword(newPass).then( user => {
            console.log("Password Changed");
        }, error => {
      console.log(error);
    });
  });
}
}
