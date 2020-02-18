import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LevelBoxComponent } from './level-box/level-box.component';
import { GeneralStatisticComponent } from './general-statistic/general-statistic.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import {GameSceneComponent} from '@app/game-scene/game-scene.component';
import {NoticeBoxComponent} from '@app/notice-box/notice-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    GameSceneComponent,
    NoticeBoxComponent,
    LevelBoxComponent,
    GeneralStatisticComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
