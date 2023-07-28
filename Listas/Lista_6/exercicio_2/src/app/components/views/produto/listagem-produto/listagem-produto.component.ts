import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent {
  
  constructor(private produtoService: ProdutoService) {}

  public produtos!: Produto[]

    ngOnInit(): void {
      this.produtoService.getProdutos().subscribe((response: Produto[]) => {
        this.produtos = response
      })
    }
}
