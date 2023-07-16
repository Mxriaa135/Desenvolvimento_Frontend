import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animais.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    constructor(private animalService: AnimalService) {}

    ngOnInit(): void {
      this.animalService.buscarAnimais().subscribe((response) => {
        console.log(response)
      })
    }
}
