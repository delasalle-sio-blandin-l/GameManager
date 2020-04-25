import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { games } from "./game-list/game-data"
import { Game } from './game-list/game';
// import { GameFromAPI } from './game-list/game';

@Injectable({
  providedIn: 'root'
})

export class GameCategoryFakeApiService {

  constructor() { }

  getAll(): Observable<Game[]> {
    return of(games); 
  }

}
