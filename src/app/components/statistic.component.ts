import {Component, Input, OnInit} from '@angular/core';
import {SceneCounters} from 'src/app/shared';

@Component({
  selector: 'app-statistic',
  template: `
<!--    <div class="title">Round Statistic</div>-->
    <div class="statistic">
      <span *ngFor="let line of stats" class="line">
        {{line.name}} <b>{{line.value}}</b>
      </span>

    </div>
  `,
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  @Input() counters: SceneCounters;

  constructor() { }

  ngOnInit(): void {
  }

  get stats() {
    return [
      {name: 'Clicks:', value: this.counters.click},
      {name: 'Scores:', value: this.counters.score},
      {name: 'Rounds Wins:', value: this.counters.win},
      {name: 'Rounds Lose:', value: this.counters.lose},
      {name: 'Rounds completed:', value: this.counters.completed}
    ]
  }

}
