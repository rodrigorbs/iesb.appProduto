import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { IProduto } from '../../interfaces/IProduto';
import { ProdutosProvider } from '../../providers/produtos/produtos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	lista:IProduto[];
	produto:IProduto =  {
					"id":3,
					"titulo":"Câmera GoPro",
					"descricao":"Câmera GoPro Hero 4 Black 4k",
					"valor":999.55,
					"tx_valor":"R$ 999,55",
					"imagem":"https://i.zst.com.br/images/camera-gopro-hero-4-black-4k-photo34744305-45-c-37.jpg",
					"video":"https://www.youtube.com/embed/K8FiJi3FVRA",
					"avaliacoes":[
						{
							"id":1,
							"titulo":"Linda câmera!...",
							"descricao":"Linda câmera! A entrega foi muito rápida",
							"nota":"10,0"
						},
						{
							"id":2,
							"titulo":"Muito bom!...",
							"descricao":"Muito bom! Estou satisfeito, mas a embalagem veio amassada",
							"nota":"9,0"
						}
					]
	};

  constructor(public navCtrl: NavController, public produtosProvider: ProdutosProvider) {
		//this.lista = this.produtosProvider.getAll();
		this.produtosProvider.getListProdutos().subscribe(res =>{
			//console.log("Saída de teste: " + res);
			this.lista = res;
		}, erro => {
			console.log("erro " + erro.message);
		});
		
  }

  abreDetalhe(produto){
		//alert('parangole');
		this.navCtrl.push(DetalhePage,{dados:produto});
  }
	
	ionViewDidEnter(){
		/*this.produtosProvider.addProduto(this.produto).subscribe(res =>{
			console.log(res);
		}, erro => {
			console.log("erro " + erro.message);
		});
		
		this.produtosProvider.editProduto(this.produto).subscribe(res =>{
			console.log(res);
		}, erro => {
			console.log("erro" + erro.message);
		});*/

		this.produtosProvider.deleteProduto(this.produto).subscribe(res =>{
			console.log(res);
		}, erro => {
			console.log("erro" + erro.message);
		});

	}
}
