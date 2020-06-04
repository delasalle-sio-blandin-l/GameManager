import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full'},
  { path: 'product', component: GameListComponent },
  // { path: 'product/:productId', component: GameDetailsComponent },


  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }