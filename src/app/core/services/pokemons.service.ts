/**
 * WiBOO CONFIDENTIAL
 * ------------------
 * Copyright (C) 2022 Ecossistema Negócios Digitais LTDA - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Ecossistema Negócios Digitais LTDA.
 *
 * @file pokemons.service.ts
 * @author Paulo Cesar <paulo.silva@wiboo.com.br>
 * @date Tuesday, 19th July 2022 6:28:37 pm
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonsResponse, Result } from './models/pokemons.model';

@Injectable()
export class PokemonService
{
    private urlPokeApi: string = 'https://pokeapi.co/api/v2/pokemon';
    constructor(
        private readonly http: HttpClient
    )
    { }

    public getPokemonslist(): Observable<Array<Result>>
    {
        return this.http.get<PokemonsResponse>(`${this.urlPokeApi}?limit=151`)
            .pipe(
                map((data: PokemonsResponse) => data.results)
            );
    }
}
