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
import {AnsiedadePage} from '../pages/perguntasFactory/ansiedade/ansiedade';
import {CaquexiaPage} from '../pages/perguntasFactory/caquexia/caquexia';
import {ConstipacaoIntestinalPage} from '../pages/perguntasFactory/constipacao-intestinal/constipacao-intestinal';
import {DeliriumPage} from '../pages/perguntasFactory/delirium/delirium';
import {DispineiaPage} from '../pages/perguntasFactory/dispineia/dispineia';
import {FortePage} from '../pages/perguntasFactory/dispineia/forte/forte';
import {FracaPage} from '../pages/perguntasFactory/dispineia/fraca/fraca';
import {ModeradaPage} from '../pages/perguntasFactory/dispineia/moderada/moderada';
import {DorNnPage} from '../pages/perguntasFactory/dor-nn/dor-nn';
import {NauseaEvomitoPage } from '../pages/perguntasFactory/nausea-evomito/nausea-evomito';
import {ObstrucaoIntestinalPage } from '../pages/perguntasFactory/obstrucao-intestinal/obstrucao-intestinal';


/// Paginas do Ionic
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//Providers and Singletons, Backend
import { AutenticacaoProvider } from '../providers/autenticacao/autenticacao';
import { PassaOuRepassaProvider } from '../providers/passa-ou-repassa/passa-ou-repassa';

//Configurações Diversas
import { firebaseConnection } from '../configs/firebaseConnectionConfig';

//Banco de dados
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    MyApp,
    // Paginas do login
    BemVindoPage, EmailLoginPage, EmailSignPage, LogoutPage,
    // Paginas das perguntas
    FortePage,FracaPage,ModeradaPage,    
    DepressaoPage,AnsiedadePage,CaquexiaPage,ConstipacaoIntestinalPage,DeliriumPage,DispineiaPage,DorNnPage,NauseaEvomitoPage,ObstrucaoIntestinalPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Banco de dados ( falta virgula no final )
    AngularFireModule.initializeApp(firebaseConnection), AngularFireDatabaseModule, AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
     // Paginas do login
     BemVindoPage, EmailLoginPage, EmailSignPage, LogoutPage,
     // Paginas das perguntas
     FortePage,FracaPage,ModeradaPage,     
     DepressaoPage,AnsiedadePage,CaquexiaPage,ConstipacaoIntestinalPage,DeliriumPage,DispineiaPage,DorNnPage,NauseaEvomitoPage,ObstrucaoIntestinalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //Banco de dados
    AngularFireDatabase,
    // Backend
    AutenticacaoProvider,
    PassaOuRepassaProvider
  ]
})
export class AppModule {}
