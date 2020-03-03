import {Component, Input, OnInit} from '@angular/core';
import {SceneCounters} from 'src/app/shared';

@Component({
  selector: 'app-statistic',
  template: `
    <div [ngClass]="'statistic'">
      <span *ngFor="let item of stats" [ngClass]="'item'">
        {{item.name}} <b>{{item.value}}</b>
      </span>
    </div>
  `,
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  @Input() counters: SceneCounters;

  constructor() {
  }

  ngOnInit() {
  }

  get stats() {
    return [
      {name: 'Clicks:', value: this.counters.click},
      {name: 'Scores:', value: this.counters.score},
      {name: 'Rounds Wins:', value: this.counters.win},
      {name: 'Rounds Lose:', value: this.counters.lose},
      {name: 'Rounds completed:', value: this.counters.completed}
    ];
  }

}
