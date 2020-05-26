import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameListComponent } from './game-list.component';
import { GameListFilterModule } from '../game-list-filter/game-list-filter.module';



@NgModule({
  declarations: [
    GameListComponent
  ],
  imports: [
    BrowserModule, 
    GameListFilterModule
  ], 
  exports: [
    GameListComponent
  ]
})
export class GameListModule { }
