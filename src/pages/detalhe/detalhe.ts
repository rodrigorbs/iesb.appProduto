import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { AvaliacaoPage } from '../avaliacao/avaliacao';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  produto = {};
  //avaliacao = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public domSanitizer: DomSanitizer) {
	  this.produto = this.navParams.get('dados');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

  abreAvaliacao(avaliacao){
		this.navCtrl.push(AvaliacaoPage,{dados:avaliacao});
  }

}
