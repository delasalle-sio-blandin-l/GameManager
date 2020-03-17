import { GameFilter } from './../game-list-filter/game-list-filter.component';
import { Component, OnInit } from '@angular/core';

import { Game } from './game';
import { GameActions } from './game-actions';
import { GameFakeApiService } from '../game-fake-api.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  defaultSize = 300;
  width = this.defaultSize;
  games: Game[]; 

  

  //filteredEntities = this.entities;

  constructor(private myAPI: GameFakeApiService) { 

  }

  ngOnInit() {

    this.myAPI.getAll().subscribe(games => this.games = games)
  }

  truncate(value: string) {
    const words = value.split(' ', 20);

    return words.join(' ') + (words.length > 20 ? + '...' : '');
  }

  sizeUp() {
    this.width += 10;
  }

  sizeDown() {
    this.width = Math.max(100, this.width - 10);
  }

  sizeReset() {
    this.width = this.defaultSize;
  }

  onActionClick(action: GameActions, game: Game) {
    alert(`${['follow', 'share', 'buy'][action]} the game nammed ${game.name}`);
  }

  // onFilter(filterForm: GameFilter) {
  //   this.filteredEntities = this.entities
  //       .filter(e => (!filterForm.name || e.name.toLocaleLowerCase().includes(filterForm.name))
  //           && (!filterForm.category || e.category === filterForm.category)
  //           && (!filterForm.editor || e.editor.toLowerCase().includes(filterForm.editor)));
  // }
}
