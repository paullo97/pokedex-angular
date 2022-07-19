/**
 * WiBOO CONFIDENTIAL
 * ------------------
 * Copyright (C) 2022 Ecossistema Negócios Digitais LTDA - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Ecossistema Negócios Digitais LTDA.
 *
 * @file core.module.ts
 * @author Paulo Cesar <paulo.silva@wiboo.com.br>
 * @date Tuesday, 19th July 2022 6:18:31 pm
 */

import { NgModule } from '@angular/core';
import { ServicesModule } from './services/services.module';

@NgModule({
    imports: [
        ServicesModule
    ]
})
export class CoreModule
{ }