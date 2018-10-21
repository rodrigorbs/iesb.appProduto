import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { PerfilPage } from '../pages/perfil/perfil';
import { EntrarPage } from '../pages/entrar/entrar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProdutosProvider } from '../providers/produtos/produtos';
import { UsuariosProvider } from '../providers/usuarios/usuarios';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalhePage,
    AvaliacaoPage,
    CadastroPage,
    PerfilPage,
    EntrarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalhePage,
    AvaliacaoPage,
    CadastroPage,
    PerfilPage,
    EntrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutosProvider,
    UsuariosProvider
  ]
})
export class AppModule {}
