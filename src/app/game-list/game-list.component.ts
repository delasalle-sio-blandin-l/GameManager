import { GameFilter } from './../game-list-filter/game-list-filter.component';
import { Component, OnInit } from '@angular/core';

import { Game } from './game';

import { GameActions } from './game-actions';

@Component({
  selector: 'app-game-list',
})
export class GameListComponent implements OnInit {


  defaultSize = 300;
  width = this.defaultSize;

  entities: Game[] = [{
    id: 1,
    name: 'BattleBlock Theater',
    description: 'Shipwrecked. Captured. Betrayed. Forced to perform for an audience of cats? '
      + 'Yes, all that and more when you unlock BattleBlock Theater!'
      + ' There\'s no turning back once you\'ve started on your quest to free over 300 of your imprisoned '
      + 'friends from evil technological cats. ',
    editor: 'The Behemoth',
    image: 'https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233',
    note: 9.8,
    category: 'RPG'
  }, {
    id: 2,
    name: 'Call Of Duty 32',
    description: 'Toujours plus ... ',
    editor: 'Activision',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/CallofDutyLogo.svg/310px-CallofDutyLogo.svg.png',
    note: 8,
    category: 'FPS'
  }, {
    id: 3,
    name: 'BattleBlock Theater 2',
    description: 'Shipwrecked. Captured. Betrayed. Forced to perform for an audience of cats? '
      + 'Yes, all that and more when you unlock BattleBlock Theater!'
      + ' There\'s no turning back once you\'ve started on your quest to free over 300 of your imprisoned '
      + 'friends from evil technological cats. ',
    editor: 'The Behemoth',
    image: 'https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233',
    note: 9.8,
    category: 'RPG'
  }, {
    id: 4,
    name: 'BattleBlock Theater 2',
    description: 'Shipwrecked. Captured. Betrayed. Forced to perform for an audience of cats? '
      + 'Yes, all that and more when you unlock BattleBlock Theater!'
      + ' There\'s no turning back once you\'ve started on your quest to free over 300 of your imprisoned '
      + 'friends from evil technological cats. ',
    editor: 'The Behemoth',
    image: 'https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233',
    note: 9.8,
    category: 'RPG'
  }, {
    id: 5,
    name: 'BattleBlock Theater 2',
    description: 'Shipwrecked. Captured. Betrayed. Forced to perform for an audience of cats? '
      + 'Yes, all that and more when you unlock BattleBlock Theater!'
      + ' There\'s no turning back once you\'ve started on your quest to free over 300 of your imprisoned '
      + 'friends from evil technological cats. ',
    editor: 'The Behemoth',
    image: 'https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233',
    note: 9.8,
    category: 'Jeu de platform multijoueur'
  }];

  filteredEntities = this.entities;

  constructor() { }

  ngOnInit() {
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

  onFilter(filterForm: GameFilter) {
    this.filteredEntities = this.entities
        .filter(e => (!filterForm.name || e.name.toLocaleLowerCase().includes(filterForm.name))
            && (!filterForm.category || e.category === filterForm.category)
            && (!filterForm.editor || e.editor.toLowerCase().includes(filterForm.editor)));
  }

}
