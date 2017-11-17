import { Injectable } from '@angular/core';
import { ToastController, Platform } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the AutenticacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticacaoProvider {


  name: string;

  constructor(private af: AngularFireModule,
              private afAuth: AngularFireAuth,
              private platform: Platform) {
    console.log('Hello AutenticacaoProvider Provider');
  }


  facebookLogin():void {
    return Observable.create(observer => {
      if (this.platform.is('cordova')) {
        return this.facebook.login(['email']).then(res => {
          const facebookCredential = auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          this.firebase.auth().signInWithCredential(facebookCredential).then(()=>{
            this.authenticated = true;
            observer.next();
          }).catch(error => {
            //console.log(error);
            observer.error(error);
          });
        });
      } else {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        
      }
    });
  }

  pegaUsuarioLogado(): any {
    console.log("Pega Usuariio");
    return false;
  }

  logout(): void {
    console.log("Faz Logout");
    this.afAuth.auth.signOut();    
  }

  googleLogin(): void {
    console.log("Google Login");
    
  }

  emailLogin(): void {
    console.log("Email login");
  }
}
