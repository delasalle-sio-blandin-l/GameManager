import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, GameDTO } from '../game-list/game';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  theIdProduct: number;
  game: Game;
  entities: Array<any>;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let theParameter = params.get('id') ; 
      this.theIdProduct =  +theParameter ; 
      // console.log(this.theIdProduct);

      this.game = this.fetchTheGameFromAPI(this.theIdProduct);
    });
  }

  fetchTheGameFromAPI(lid: number):Game {
    var gameRet:Game = {
      id: null,
      name: null,
      description: null,
      image: null,
      note: null, 
      genres: null, 
      editor: null
    };

    fetch('http://localhost:3000/games')
    .then(r => r.json())
    .then(r => {
      let gamesFromAPI:GameDTO[] = r ; 

      gamesFromAPI.forEach(e => {
        if(e.id == lid) {
          gameRet.name = e.name; 
          gameRet.description = e.description ; 
          gameRet.image = e.image ; 
          console.log(e.description);
          console.log(e.name);
        } 
      });
    })
    return gameRet  ; 
  }

  goBack(): void {
    this.location.back();
  }
}
