import { Component, Input } from '@angular/core';
import { InformationResponse } from 'src/app/core/services/models/pokemons.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent
{
    @Input()
    public pokemon: InformationResponse | undefined;

    public searchImage(id: string): string
    {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    }
}
