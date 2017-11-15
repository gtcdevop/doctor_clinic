import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailSignPage } from './email-sign';

@NgModule({
  declarations: [
    EmailSignPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailSignPage),
  ],
})
export class EmailSignPageModule {}
