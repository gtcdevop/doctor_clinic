import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//#Paginas para o Menu
import { HomePage } from '../pages/home/home';
//#####Paginas do login
import {BemVindoPage} from '../pages/loginsFactory/bem-vindo/bem-vindo';
import {EmailLoginPage} from '../pages/loginsFactory/email-login/email-login';
import {EmailSignPage} from '../pages/loginsFactory/email-sign/email-sign';
import {LogoutPage} from '../pages/loginsFactory/logout/logout';
//#####Paginas das perguntas
import {DepressaoPage} from '../pages/perguntasFactory/depressao/depressao';


// Provider de autenticacao usado para verificar se user esta logado e assim mostrar ou nao menu
import { AutenticacaoProvider } from '../providers/autenticacao/autenticacao';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private _authProvider : AutenticacaoProvider) {
    this.initializeApp();
    _authProvider.carreguei();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Email Login', component: EmailLoginPage },
      { title: 'Logout', component: LogoutPage },
      { title: 'Email Sign', component: EmailSignPage },
      { title: 'Depressao', component: DepressaoPage },
      { title: 'Bem Vindo', component: BemVindoPage }
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
    this.nav.push(page.component);
  }
}
