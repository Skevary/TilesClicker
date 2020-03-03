import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SceneCounters} from 'src/app/shared';

@Component({
  selector: 'app-lvl-navigator',
  template: `
    <ng-container *ngFor="let lvl of counters">
      <div
        *ngIf="boxAvailable(lvl)"
        [ngClass]="'lvl-box'"
        [class.selected]="lvl.id === selectedId"
        [class.active]="lvl.id === activeId"
        (click)="select.emit(lvl.id)">
        <span [ngClass]="'title'">{{lvl.id + 1}}</span>
      </div>

      <div *ngIf="!boxAvailable(lvl)" [ngClass]="'lock-lvl-box'">
        <div [ngClass]="'state'" [title]="stateTitle">
          <i [ngClass]="'fas fa-lock'"></i>
        </div>
        <span [ngClass]="'title'">{{lvl.id + 1}}</span>
      </div>
    </ng-container>
  `,
  styleUrls: ['./lvl-navigator.component.scss']
})
export class LvlNavigatorComponent implements OnInit {
  @Input() activeId: number;
  @Input() selectedId: number;
  @Input() counters: SceneCounters[];

  @Output() select = new EventEmitter<number>();

  stateTitle = 'Not available, complete previous levels';

  constructor() {
  }

  ngOnInit(): void {
  }

  boxAvailable({id}: SceneCounters): boolean {
    return id === 0 ? true : !!this.counters[id - 1].win;
  }
}
