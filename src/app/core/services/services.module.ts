/**
 * WiBOO CONFIDENTIAL
 * ------------------
 * Copyright (C) 2022 Ecossistema Negócios Digitais LTDA - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Ecossistema Negócios Digitais LTDA.
 *
 * @file services.module.ts
 * @author Paulo Cesar <paulo.silva@wiboo.com.br>
 * @date Tuesday, 19th July 2022 6:19:31 pm
 */

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PokemonService } from './pokemons.service';


@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        PokemonService
    ]
})
export class ServicesModule
{ }
