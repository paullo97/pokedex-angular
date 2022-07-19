import { Component, OnInit } from '@angular/core';
import { InformationResponse, Result } from './core/services/models/pokemons.model';
import { PokemonService } from './core/services/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
    public listPokemons: Array<Result> = [];
    public listPokemonsAll: Array<Result> = [];
    public pokemonShow: InformationResponse | undefined;

    constructor(private readonly pokemonService: PokemonService)
    { }

    public ngOnInit(): void
    {
        this.pokemonService.getPokemonslist().subscribe((data) =>
        {
            this.listPokemons = data;
            this.listPokemonsAll = data;
        });
    }

    public getInformation(name: string): void
    {
        this.pokemonService.getInformationPokemon(name).subscribe((data) => this.pokemonShow = data);
    }

    public searchPokemon(pokemon: string): void
    {
        if(pokemon.length === 0)
        {
            this.listPokemons = this.listPokemonsAll;
            return;
        }

        this.listPokemons = this.listPokemonsAll.filter((data) =>
        {
            return data.name.toLocaleLowerCase().indexOf(pokemon.toLocaleLowerCase()) >= 0
        });
    }
}
