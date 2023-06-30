import { Component } from '@angular/core';
import Analista from './models/analista';
import Funcionario from './models/funcionario';
import Gestor from './models/gestor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio_1';
  public analistas: Analista[] = new Array<Analista>();
  public gestor: Gestor = new Gestor("Marcia", 75490, "Gestora de TI", [])

  constructor() {
    this.analistas.push(new Analista("Lucas", 27890, "Analista de infraestrutura", this.gestor.nome));
    this.analistas.push(new Analista("Marcos", 92907, "Analista de infraestrutura", this.gestor.nome));
    this.analistas.push(new Analista("Glenda", 87378, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Pedro", 36789, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Brenda", 97230, "Analista de cloud", this.gestor.nome));
    this.analistas.push(new Analista("Clara", 25689, "Analista de cyber-secutiry", this.gestor.nome));
    this.analistas.push(new Analista("Camila", 18640, "Analista de banco de dados", this.gestor.nome));
    this.analistas.push(new Analista("Maria", 29960, "Analista de redes", this.gestor.nome));
    this.analistas.push(new Analista("Henrique", 27894, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Bruna", 28702, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Tiago", 32986, "Analista de sistemas", this.gestor.nome));

    this.gestor.nomeSubordinados = this.analistas.map(analista => analista.nome);
  }
}
