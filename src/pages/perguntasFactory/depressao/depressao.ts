import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the DepressaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-depressao',
  templateUrl: 'depressao.html'
})
export class DepressaoPage {

  shownGroup = null;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepressaoPage');
  }

  showToastMessage(obj) {
    console.log(obj)
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 6000,
      position: "middle",
      closeButtonText: "Fechar",
      showCloseButton: true,
      dismissOnPageChange: true      
    });
    toast.present();
  }
  
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    } 
  }
  
  isGroupShown(group) {
    return this.shownGroup === group;
  }



}
