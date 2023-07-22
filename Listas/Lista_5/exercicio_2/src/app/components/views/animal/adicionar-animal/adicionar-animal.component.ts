import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animais';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-adicionar-animal',
  templateUrl: './adicionar-animal.component.html',
  styleUrls: ['./adicionar-animal.component.css']
})
export class AdicionarAnimalComponent {
  public nomeDoAnimal!: string;
  public raca!: string;
  public peso!: number;

  constructor(private animalService: AnimalService, private router: Router) {}

  public adicionarAnimal() {
    let animal = new Animal(this.nomeDoAnimal, this.raca, this.peso);
    this.animalService.AdicionarAnimal(animal).subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(["/"])
  }
}