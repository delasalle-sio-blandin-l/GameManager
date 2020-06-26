import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {
  theIdProduct: number;
  isNew: boolean = false ; 

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let theParameter = params.get('productId') ; 
      if (theParameter == null) 
        this.isNew = true ;
      else {
        this.theIdProduct =  +theParameter ; 
        if (isNaN(this.theIdProduct)) 
          this.router.navigate(['/404/you_typed_a_wrong_id']);
      }
    });
  }

}
