import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LivreComponent } from './biblio/livre/livre.component';
import { ListlivresComponent } from './biblio/listlivres/listlivres.component';


@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    ListlivresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
