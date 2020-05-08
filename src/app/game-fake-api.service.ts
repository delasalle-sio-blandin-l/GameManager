import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { games } from "./game-list/game-data"
import { Game } from './game-list/game';
// import { GameFromAPI } from './game-list/game';

@Injectable({
  providedIn: 'root'
})


export class GameFakeApiService {

  constructor() { }

  getAll(): Observable<Game[]> {

    setTimeout( () => {return of(games)} , 3000); 
    return of(games);
    
  }
}