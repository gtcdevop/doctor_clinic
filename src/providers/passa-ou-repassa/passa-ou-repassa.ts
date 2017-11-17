import { Injectable } from '@angular/core';

/**
 * Para instalaar angular fire
 * npm install -g @angular/cli
 * npm install angularfire2 firebase promise-polyfill --save
 * 
 * Depois seguir esse tutorial para configurar o banco de dados
 * https://github.com/angular/angularfire2/blob/master/docs/ionic/v3.md#setup-ngmodule
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

/**
 * Pega uma pergunta aleatoria testa acesso ao banco de dados 
 */
  pegaPerguntaAleatoria():void { 


  }
}

