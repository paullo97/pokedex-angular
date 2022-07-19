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

export interface Result
{
    name: string;
    url: string;
}

export interface PokemonsResponse
{
    count: number;
    next: string;
    results: Array<Result>;
}

/** Information Pokemon */

export interface Ability2
{
    name: string;
    url: string;
}

export interface Ability
{
    ability: Ability2;
    is_hidden: boolean;
    slot: number;
}

export interface Stat2
{
    name: string;
    url: string;
}

export interface Stat
{
    base_stat: number;
    effort: number;
    stat: Stat2;
}

export interface Type2
{
    name: string;
    url: string;
}

export interface Type
{
    slot: number;
    type: Type2;
}

export interface InformationResponse
{
    abilities: Array<Ability>;
    height: number;
    name: string;
    order: number;
    stats: Array<Stat>;
    types: Array<Type>;
    weight: number;
    id: string;
}