import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-top-panel></app-top-panel>

    <div class="main-container">
      <!--      <app-notice-box></app-notice-box>-->
      <!--      <app-game-scene></app-game-scene>-->
      <!--      <app-level-box></app-level-box>-->
      <!--      <app-general-statistic></app-general-statistic>-->
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TilesClicker';

  constructor() {
  }
}
