import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Game, GameDTO } from './game-list/game';
import { Category } from './game-list-filter/category';
import { Editor } from './game-list-filter/editor';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  private urlApi = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  public getCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.urlApi + '/genres');
  }

  public getGames() {
    return forkJoin([
      this.httpClient.get<GameDTO[]>(this.urlApi + '/games'),
      this.getCategories(), 
      this.httpClient.get<Editor[]>(this.urlApi + '/publishers')
    ]).pipe(
      delay(1000),
      map(([
        games,
        categories,
        editors
      ]) => this.convert(games, categories, editors))
    )
  }

  deleteGame (id: number): Observable<{}> {
    const url = `${this.urlApi}/games/${id}`;
    return this.httpClient.delete(url);
  }

  private convert(games: GameDTO[], categories: Category[], editors: Editor[]): Game[] {
    return games.map(game => ({
      ...game,
      genres: game.genres.map(genre => categories.find(category => category.id === +genre)),
      editor: editors.find(editor => editor.id === game.publisher)
    }))
  }

}


