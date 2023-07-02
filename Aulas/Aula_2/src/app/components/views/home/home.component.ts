import { AnimalService } from './../../../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private animalService: AnimalService) {}
  public animais!: Animal[];

  ngOnInit(): void {
    this.animalService.getAnimais().subscribe((response) => {
      this.animais = response
    })
  }
}
