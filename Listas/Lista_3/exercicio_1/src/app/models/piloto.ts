export default class Piloto {
    nome: string;
    nacionalidade: string;
    inicioCarreira: string
    vitorias: Number;
    titulos: Number;
    nomeTeam: string;
    imagem: URL;

    constructor(nome: string, nacionalidade: string, inicioCarreira: string, vitorias: Number, titulos: Number, nomeTeam: string, imagem: URL) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.inicioCarreira = inicioCarreira;
        this.vitorias = vitorias;
        this.titulos = titulos;
        this.nomeTeam = nomeTeam;
        this.imagem = imagem;
    }
}