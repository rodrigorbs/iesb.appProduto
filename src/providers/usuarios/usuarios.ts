import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { IUsuario } from '../../interfaces/IUsuario';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  //url = 'http://localhost:3000/';
  url = 'http://localhost:8000/api/';

  constructor(public http: HttpClient, private storage: Storage) {
    this.storage.set('nome', 'Cicero');
    
    this.storage.get('nome').then((val) => {
      if(val){
          console.log('Nome....:', val);
      }
      else{
          console.log('Não encontrei no banco de dados', val);
      }
    });
  }

  setStorage(chave, valor) {
    this.storage.set(chave, valor);
  }

  getStorage(chave) {
      return this.storage.get(chave);
  }

  showUsuario(usuario:IUsuario){
      //return this.http.get<IUsuario>(this.url+'usuarios/'+data.id);
      //return this.http.get<IUsuario>(this.url + 'usuario', {"headers": {"authorization": "Bearer "+localStorage.getItem('token')}});
      return this.http.get<IUsuario>(this.url + 'usuario', {"headers": {"authorization": "Bearer "+usuario.token}});
  }

  addUsuario(usuario:IUsuario){
    return this.http.post<IUsuario>(this.url+'usuarios/', usuario);
  }

  editUsuario(usuario:IUsuario){
    //return this.http.put<IUsuario>(this.url + 'usuarios/'+data.id, data);
    return this.http.put<IUsuario>(this.url + 'usuario', usuario, {"headers": {"authorization": "Bearer "+localStorage.getItem('token')}});
  }
  
  loginUsuario(data:IUsuario){
    //return this.http.get<IUsuario>(this.url + 'usuarios/' + data.id); 
    return this.http.post<IUsuario>(this.url + 'login', data);
  } 
}
