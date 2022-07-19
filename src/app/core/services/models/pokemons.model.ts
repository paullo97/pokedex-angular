/**
 * WiBOO CONFIDENTIAL
 * ------------------
 * Copyright (C) 2022 Ecossistema Negócios Digitais LTDA - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Ecossistema Negócios Digitais LTDA.
 *
 * @file pokemons.model.ts
 * @author Paulo Cesar <paulo.silva@wiboo.com.br>
 * @date Tuesday, 19th July 2022 6:22:49 pm
 */

export interface Result {
    name: string;
    url: string;
}

export interface PokemonsResponse {
    count: number;
    next: string;
    results: Array<Result>;
}