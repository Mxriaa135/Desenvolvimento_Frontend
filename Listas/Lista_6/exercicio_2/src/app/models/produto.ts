export class Produto {
    public nome: string;
    public descricao: string;
    public imagem: string;
    public categoria: string;
    public valor: number;

    constructor(nome: string, descricao: string, imagem: string, categoria: string, valor: number){
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.categoria = categoria;
        this.valor = valor;
    }
}