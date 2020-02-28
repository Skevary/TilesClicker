import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SceneCounters} from 'src/app/shared';

@Component({
  selector: 'app-lvl-navigator',
  template: `
    <ng-container *ngFor="let lvl of counters">
      <div *ngIf="boxAvailable(lvl)"
        class="lvl-box"
        (click)="select.emit(lvl.id)"
        [class.selected]="lvl.id === selectedId"
        [class.active]="lvl.id === activeId">
        <span class="title">{{lvl.id + 1}}</span>
      </div>

      <div *ngIf="!boxAvailable(lvl)" class="lock-lvl-box">
        <div class="state" [title]="'Not available, complete previous levels.'">
          <i class="fas fa-lock"></i>
        </div>
        <span class="title">{{lvl.id + 1}}</span>
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

  constructor() { }

  ngOnInit(): void {
  }

  boxAvailable({id}: SceneCounters): boolean {
    return id === 0 ? true : !!this.counters[id - 1].win;
  }

  /* todo: listen arrow-keys pressed -> navigation right/left */

}
