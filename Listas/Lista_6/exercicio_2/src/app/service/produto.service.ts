import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>("http://localhost:8050/listar-produtos")
  }

  public AdicionarProduto(produto: Produto): Observable<string> {
    return this.http.post<string>("http://localhost:8050/adicionar-produto ", produto);
  }
}
