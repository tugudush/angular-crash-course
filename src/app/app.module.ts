import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { EventListComponent } from './events/event-list.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EventListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
