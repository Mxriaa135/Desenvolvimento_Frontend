import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../models/animais';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) {}

  getAnimais(): Observable<Animal[]> {
    return this.http.get<Animal[]>("http://localhost:8050/listar-animais")
  }

  public AdicionarAnimal(animal: Animal): Observable<string> {
    return this.http.post<string>("http://localhost:8050/adicionar-animal", animal);
  }
}
