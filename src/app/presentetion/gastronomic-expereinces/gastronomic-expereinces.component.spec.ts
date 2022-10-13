import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastronomicExpereincesComponent } from './gastronomic-expereinces.component';

describe('GastronomicExpereincesComponent', () => {
  let component: GastronomicExpereincesComponent;
  let fixture: ComponentFixture<GastronomicExpereincesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastronomicExpereincesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastronomicExpereincesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
