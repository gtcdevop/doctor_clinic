import { Injectable } from '@angular/core';

/*
  Generated class for the PassaOuRepassaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PassaOuRepassaProvider {

  constructor() {
    console.log('Hello PassaOuRepassaProvider Provider');
  }


  /**
   * Dada uma pagina ele busca as perguntas e respostas
   * @param pagina parametro pagina para receber as perguntas e respostas
   */
  perguntasParaPagina(pagina: string): any {
    //
  }
}

