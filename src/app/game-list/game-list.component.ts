import { GameFilter } from './../game-list-filter/game-list-filter.component';
import { Component, OnInit } from '@angular/core';
import { GameApiService } from '../game-api.service';


import { Game } from './game';
import { GameActions } from './game-actions';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  defaultSize = 300;
  width = this.defaultSize;

  // games: Game[];
  filteredEntities: Game[];

  // array of all items to be paged
  entities: Array<any>;
    
  private filterForm: GameFilter;


  constructor(private gameapiService: GameApiService) { }


  ngOnInit() {
    this.getListGames();
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

  delete(id) {
    console.log(id);
    this.gameapiService.deleteGame(id).subscribe();
  }

  onFilter(filterForm: GameFilter) {
    this.filterForm = filterForm;
    this.filter();
  }

  private filter(){
    if(this.entities)
    if(this.filterForm)
    this.filteredEntities = this.entities.filter(game => 
              (!this.filterForm.name || game.title.toLocaleLowerCase().includes(this.filterForm.name))
          &&  (!this.filterForm.category || game.genres.find(genre => genre.name === (this.filterForm.category)))
          &&  (!this.filterForm.editor || game.developer.toLowerCase().includes(this.filterForm.editor)));
    else
    this.filteredEntities = this.entities;
  }

  getListGames() {
    this.gameapiService.getGames().subscribe((data)=>{
      this.entities = data;
      this.filter();
    });
  }

}