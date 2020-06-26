import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameFormComponent } from './game-form/game-form.component';

const routes: Routes = [
  { path: 'product', component: GameListComponent },
  
  { path: 'product/new', component: GameFormComponent },
  { path: 'product/:id/edit', component: GameFormComponent },

  { path: 'product/:id', component: GameDetailsComponent },


  { path: '', redirectTo: '/product', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }