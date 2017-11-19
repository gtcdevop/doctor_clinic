import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Paginas das dores
import { FortePage } from './forte/forte';
import { ModeradaPage} from './moderada/moderada';
import { FracaPage } from './fraca/fraca';

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

  intensidadeDor:number=1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  diagnostico(intensidadeDor) : void {
    console.log(intensidadeDor)
    console.log("show diagnostico");
  }

  showPagina(): void {
    if (this.intensidadeDor == 1) {
      this.navCtrl.push(FracaPage);
    } else  if( this.intensidadeDor == 2 ) {
      this.navCtrl.push(ModeradaPage);
    } if( this.intensidadeDor == 3 ) {
      this.navCtrl.push(FortePage);
    }
  }
}
