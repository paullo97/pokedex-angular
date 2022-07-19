import { Component, Input } from '@angular/core';
import { Result } from '../../core/services/models/pokemons.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent
{
    @Input()
    public pokemons: Array<Result> = [];
}
