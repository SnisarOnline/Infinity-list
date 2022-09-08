import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, // http
    PeopleModule // Infinity-list
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
