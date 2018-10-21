import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { HomePage } from "../home/home";
import { IUsuario } from "../../interfaces/IUsuario";
import { UsuariosProvider } from '../../providers/usuarios/usuarios';


/**
 * Generated class for the EntrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrar',
  templateUrl: 'entrar.html',
})
export class EntrarPage {

  usuario:IUsuario = {"email":"", "password":""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuariosProvider:UsuariosProvider, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('página Entrar');
  }

  loginUsuario(){
    this.usuariosProvider.loginUsuario(this.usuario).subscribe(res=>{
      if(res){
        if(res.token){
          console.log(res);
          this.usuariosProvider.setStorage("usuario", res);
          localStorage.setItem('token', res.token);
          this.ativaMenuLogin();
          this.cancelar();
        }
        else{
          console.log(res); //validação
        }
      }
      else{
        //login com erro
      }
    }, erro => {
      console.log("Erro " + erro.message);
    });
  }

  cancelar(){
    this.navCtrl.setRoot(HomePage);
  }

  ativaMenuLogin() {
    this.menuCtrl.enable(true, 'usuarioComLogin');
    this.menuCtrl.enable(false, 'usuarioSemLogin');
  }
}
