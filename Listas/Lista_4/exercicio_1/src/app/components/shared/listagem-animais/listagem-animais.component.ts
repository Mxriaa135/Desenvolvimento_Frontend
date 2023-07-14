import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animais';
import { AnimalService } from 'src/app/services/animais.service';

@Component({
  selector: 'app-listagem-animais',
  templateUrl: './listagem-animais.component.html',
  styleUrls: ['./listagem-animais.component.css']
})
export class ListagemAnimaisComponent implements OnInit {
  constructor(private animalService: AnimalService) {}

  public animais!: Animal[]

    ngOnInit(): void {
      this.animalService.buscarAnimais().subscribe((response) => {
        this.animais = (response)
      })
    }
}
