
import { Observable } from "rxjs";
import { Animal } from "../models/animal";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  constructor(private http: HttpClient) {}

  public getAnimais():Observable<Animal[]> {
    return this.http.get<Animal[]>("http://localhost:8000/listar-animais")
  }
}
