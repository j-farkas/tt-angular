import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HandsComponent } from './hands/hands.component';
import { BoardsComponent } from './boards/boards.component';
import { ScoreComponent } from './score/score.component';
import { OptionsComponent } from './options/options.component';
import { Hands2Component } from './hands2/hands2.component';



@NgModule({
  declarations: [
    AppComponent,
    HandsComponent,
    BoardsComponent,
    ScoreComponent,
    OptionsComponent,
    Hands2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
