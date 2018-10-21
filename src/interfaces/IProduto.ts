import { IAvaliacao } from './IAvaliacao';
export interface IProduto{
    "id"?: number;
    "titulo": string;
    "descricao": string;
    "valor": number;
    "tx_valor": string;
    "imagem": string;
    "video": string;
    "avaliacoes":IAvaliacao[];
}
