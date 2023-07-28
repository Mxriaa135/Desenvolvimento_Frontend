import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent {
  public nome!: string;
  public descricao!: string;
  public imagem!: string;
  public categoria!: string;
  public valor!: number;

  constructor(private produtoService: ProdutoService, private router: Router) {}

  public adicionarProduto() {
    let produto = new Produto(this.nome, this.descricao, this.imagem, this.categoria, this.valor);
    this.produtoService.AdicionarProduto(produto).subscribe((response) => {
      console.log(response);
    });
    this.router.navigate(["/"])
  }
}
