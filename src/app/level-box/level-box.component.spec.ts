import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelBoxComponent } from './level-box.component';

describe('LevelBoxComponent', () => {
  let component: LevelBoxComponent;
  let fixture: ComponentFixture<LevelBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
