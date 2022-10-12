import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpereincesComponent } from './expereinces.component';

describe('ExpereincesComponent', () => {
  let component: ExpereincesComponent;
  let fixture: ComponentFixture<ExpereincesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpereincesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpereincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
