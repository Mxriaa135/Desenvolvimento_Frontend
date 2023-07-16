import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Animal } from "../models/animais";

@Injectable({
    providedIn: 'root'
})

export class AnimalService {

    constructor(private http: HttpClient){}

    buscarAnimais(): Observable<any> {
        return this.http.get<Animal[]>("http://localhost:8050/listar-animais")
    }
}