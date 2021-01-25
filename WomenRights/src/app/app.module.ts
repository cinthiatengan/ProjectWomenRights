import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CorpoComponent } from './corpo/corpo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContatoComponent } from './contato/contato.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CorpoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
