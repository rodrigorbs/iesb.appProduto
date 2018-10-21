import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../../interfaces/IProduto';

/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  url = "http://localhost:3000/";

  constructor(public http: HttpClient) {
    console.log('Hello ProdutosProvider Provider');
  }

  getListProdutos(){
    return this.http.get<IProduto[]>(this.url+'produtos/');
  }

  addProduto(produto:IProduto){
    return this.http.post<IProduto>(this.url+'produtos/', produto);
  }
  
  editProduto(produto:IProduto){
    return this.http.put<IProduto>(this.url+'produtos/'+produto.id, produto);
  }
  
  deleteProduto(produto:IProduto){
    return this.http.delete<IProduto>(this.url+'produtos/'+produto.id);
  }
  

  getAll(){
    const lista:IProduto[] = [
      {
        "id":1,
        "titulo":"Smart TV Samsung",
        "descricao":"Smart TV LED 43\" Samsung 43j5200 Full HD Conversor Digital 2 HDMI.",
        "valor":1787.55,
        "tx_valor":"R$ 1.787,55",
        "imagem":"https://images-americanas.b2w.io/produtos/01/00/item/125628/8/125628846SZ.jpg",
        "video":"https://www.youtube.com/embed/UOgkfRPHGRg",
        "avaliacoes":[
          {
            "id":1,
            "titulo":"Ótimo produto!...",
            "descricao":"Ótimo produto! Recomendo a todos...",
            "nota":"10,0"
          },
          {
            "id":2,
            "titulo":"Não gostei...",
            "descricao":"Não gostei do produto. Não atende às minhas necessidades.",
            "nota":"3,0"
          }
        ]
      },
      {
        "id":2,
        "titulo":"Notebook Samsung",
        "descricao":"Notebook Samsung ATIV Book 2 270E4E-KD9 com Intel® Core™ i3-3110M, 4GB, 500GB, Gravador",
        "valor":1389.72,
        "tx_valor":"R$ 1.389,72",
        "imagem":"https://www.casasbahia-imagens.com.br/Informatica/Notebook/3474894/244422120/Notebook-Samsung-ATIV-Book-2-270E4E-KD9-com-Intel-Core-i3-3110M-4GB-500GB-Gravador-de-DVD-Leitor-de-Cartoes-HDMI-Webcam-LED-14-e-Windows-8-1-3474894.jpg",
        "video":"https://www.youtube.com/embed/VfTh5iheyDI",
        "avaliacoes":[]
      }
      ];
      return lista;
  }
}
