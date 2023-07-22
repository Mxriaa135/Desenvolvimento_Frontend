import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-listagem-pokemon',
  templateUrl: './listagem-pokemon.component.html',
  styleUrls: ['./listagem-pokemon.component.css']
})
export class ListagemPokemonComponent implements OnInit{

  constructor(private pokemonService: PokemonService) {}

  public pokemons: any[] = [];

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      console.log(response.results)
      for(let pokemon of response.results) {
        this.pokemonService.getInfoPokemon(pokemon.name).subscribe((res: any) => {
          this.pokemons.push(res)
          console.log(res)
        })
      }
    })
  }
}
