//Providers and dependencies 
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';
//pages
import { EmailSignPage } from '../loginsFactory/email-sign/email-sign'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public auth: AutenticacaoProvider) {

  }
  loginFacebook():void {
    this.auth.facebookLogin();    
  }
  loginGoogle():void {
    this.auth.googleLogin();
  }
  loginEmail():void {
    this.auth.emailLogin();
  }
  SignEmail():void {
    this.navCtrl.push(EmailSignPage)
  }
  
}
