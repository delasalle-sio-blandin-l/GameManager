import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameListFilterComponent } from './game-list-filter.component';



@NgModule({
  declarations: [
    GameListFilterComponent
  ],
    
  imports: [
    BrowserModule
  ], 
  exports: [
    GameListFilterComponent
  ]
})
export class GameListFilterModule { }
