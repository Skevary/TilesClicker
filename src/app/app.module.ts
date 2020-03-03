import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {TopBarComponent} from '@app/components/top-bar.component';
import {LvlNavigatorComponent} from '@app/components/lvl-navigator.component';
import {GameSceneComponent} from '@app/components/game-scene.component';
import {ProgressBarComponent} from '@app/components/progress-bar.component';
import {StatisticComponent} from '@app/components/statistic.component';

@NgModule({
  declarations: [
    AppComponent,

    TopBarComponent,
    LvlNavigatorComponent,
    StatisticComponent,
    ProgressBarComponent,
    GameSceneComponent,
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
