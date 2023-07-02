export class Animal
{
  _id: String
  nome: String
  raca: String
  peso: number

  constructor(_id: String, nome: String, raca: string, peso: number){
    this._id= _id
    this.nome = nome
    this.raca = raca
    this.peso = peso
  }
}
