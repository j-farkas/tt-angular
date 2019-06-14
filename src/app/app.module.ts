import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HandsComponent } from './hands/hands.component';
import { BoardsComponent } from './boards/boards.component';
import { ScoreComponent } from './score/score.component';
import { OptionsComponent } from './options/options.component';
import { Hands2Component } from './hands2/hands2.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    HandsComponent,
    BoardsComponent,
    ScoreComponent,
    OptionsComponent,
    Hands2Component,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
