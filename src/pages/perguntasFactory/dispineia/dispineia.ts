import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DispineiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dispineia',
  templateUrl: 'dispineia.html',
})
export class DispineiaPage {

  intensidadeDor:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  showDiagnostico(intensidadeDor) : void {
    console.log(intensidadeDor)
    console.log("show diagnostico");
  }

  

}
