import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//Paginas do login
import {BemVindoPage} from '../pages/loginsFactory/bem-vindo/bem-vindo';
import {EmailLoginPage} from '../pages/loginsFactory/email-login/email-login';
import {EmailSignPage} from '../pages/loginsFactory/email-sign/email-sign';
import {LogoutPage} from '../pages/loginsFactory/logout/logout';

// Paginas das perguntas
import {DepressaoPage} from '../pages/perguntasFactory/depressao/depressao';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AutenticacaoProvider } from '../providers/autenticacao/autenticacao';
import { PassaOuRepassaProvider } from '../providers/passa-ou-repassa/passa-ou-repassa';

@NgModule({
  declarations: [
    MyApp,
    // Paginas do login
    BemVindoPage, EmailLoginPage, EmailSignPage, LogoutPage,
    // Paginas das perguntas
    DepressaoPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
     // Paginas do login
     BemVindoPage, EmailLoginPage, EmailSignPage, LogoutPage,
     // Paginas das perguntas
     DepressaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticacaoProvider,
    PassaOuRepassaProvider
  ]
})
export class AppModule {}
