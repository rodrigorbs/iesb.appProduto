import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { IUsuario } from '../../interfaces/IUsuario';
import { HomePage } from '../home/home';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario:IUsuario = {"name":"", "email":"", "password":""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuariosProvider:UsuariosProvider) {
  }

  ionViewDidLoad() {
    this.usuariosProvider.getStorage("usuario").then(usuario=>{
      if(usuario){
        this.usuario = usuario;
        this.usuariosProvider.showUsuario(usuario).subscribe(res=>{
          this.usuario = res;
          console.log(this.usuario);
        }, erro=>{
          console.log("Erro: "+erro.message)
        });
      }
      else{
          this.cancelar();
      }
    });
  }


  addUsuario(){
    //console.log(this.usuario);
    this.usuariosProvider.addUsuario(this.usuario).subscribe(res=>{
      console.log(res);
    }, erro=>{
      console.log("Erro: "+erro.message)
    });
  }


  editarUsuario(){
    this.usuariosProvider.editUsuario(this.usuario).subscribe(res=>{
        this.usuario = res;
        this.usuariosProvider.setStorage("usuario", res);
        localStorage.setItem('token', res.token);
    }, erro => {
      console.log("Erro " + erro.message);
    });
  }

  



  cancelar(){
    this.navCtrl.setRoot(HomePage);
  }

}
