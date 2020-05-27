import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GameListModule } from './game-list/game-list.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';

// const appRoutes: Routes = [
//   { path: '', redirectTo: '/product', pathMatch: 'full' },
//   { path: '/product', component: GameListModule },
//   { path: '**', component: NotFoundComponent },
// ];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    GameListModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
