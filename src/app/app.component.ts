import { Component, OnInit } from '@angular/core';
import { Result } from './core/services/models/pokemons.model';
import { PokemonService } from './core/services/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    public listPokemons: Array<Result> = [];

    constructor(private readonly pokemonService: PokemonService)
    { }

    public ngOnInit(): void
    {
        this.pokemonService.getPokemonslist().subscribe((data) => this.listPokemons = data);
    }
}
