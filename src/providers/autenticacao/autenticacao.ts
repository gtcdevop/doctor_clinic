import { Injectable } from '@angular/core';
import { ToastController, Platform } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//Login no browser 
// Instalar
/**
 * ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="547741515572804" --variable APP_NAME="medico"
 */
// import { Facebook } from '@ionic-native/facebook';

/*
  Generated class for the AutenticacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticacaoProvider {

  public authState: any;
  name: string;
  public currentUser: firebase.User = null;

  constructor(private af: AngularFireModule,
              private afAuth: AngularFireAuth,
              private platform: Platform) {
    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
    this.authState = afAuth.authState;
  }


  facebookLogin():void {
    alert(JSON.stringify(this.currentUser));
      if(this.currentUser == null){ 
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
      } else {
        alert("usuario ja logado");
      }
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
    return Observable.create(observer => {
      if (this.platform.is('cordova')) {      
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      } else {
          alert("Google login não é suportado");
      }
    });
  }
  emailLogin(): void {
    console.log("Email login");
  }
}
