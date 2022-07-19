import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent,
        ListComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
