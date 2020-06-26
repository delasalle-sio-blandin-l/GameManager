import { GameFilter } from './../game-list-filter/game-list-filter.component';
import { Component, OnInit } from '@angular/core';
import { GameApiService } from '../game-api.service';


import { Game } from './game';
import { GameActions } from './game-actions';

import { RouterModule, Routes, Router} from '@angular/router';

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


  // current page of items
  pageOfItems: Array<any>;


  constructor(private gameapiService: GameApiService, private router: Router) { }


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
    if(this.entities) {
      if(this.filterForm) {
        this.filteredEntities = this.entities.filter(e => 
              (!this.filterForm.name || e.title.toLocaleLowerCase().includes(this.filterForm.name))
            && (!this.filterForm.category || e.genres.find(genre => genre.id === +this.filterForm.category))
            && (!this.filterForm.editor 
                || e.editor.name.toLocaleLowerCase().includes(this.filterForm.editor.toLocaleLowerCase())));
      }
      else {
        this.filteredEntities = this.entities;
      }
    }
    else {
      this.filteredEntities = [];
    }
  }

  getListGames() {
    this.gameapiService.getGames().subscribe((data)=>{
      this.entities = data;
      this.filter();
      console.log({data});
    });
  }

  seeDetails(id:number) {
    console.log(id);
    this.router.navigate(['/product/'+id])
  }

  edit(id:number) {
    console.log(id);
    this.router.navigate(['/product/'+id + '/edit'])
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}