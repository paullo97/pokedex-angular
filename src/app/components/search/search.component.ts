import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent
{
    public pokemon: string = '';

    @Output()
    public search: EventEmitter<string> = new EventEmitter();

    public searchPokemon(): void
    {
        this.search.emit(this.pokemon);
    }
}
