/*
*File:app.modules.ts
*Author: Szűcs Norbert
*Copyright: 2022, Szűcs Norbert
*Group: Szoft II/N
*Date:2022.01.09
*Github:https://github.com/Szucs-Norbert
*Program feladata: Egy pentagon területének kiszámítása. 
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }