import { Injectable } from '@angular/core';
import { games } from './game-list/game-data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameFakeApiService {

  getAll() {
    return of(games);
  }
}