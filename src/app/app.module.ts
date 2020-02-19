import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopPanelComponent} from './top-panel/top-panel.component';
import {LevelBoxComponent} from './level-box/level-box.component';
import {StatisticComponent} from './statistic-pane/statistic.component';
import {GameSceneComponent} from './game-scene/game-scene.component';
import {MessagesBoxComponent} from '@app/messages-box/messages-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    MessagesBoxComponent,
    GameSceneComponent,
    LevelBoxComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
