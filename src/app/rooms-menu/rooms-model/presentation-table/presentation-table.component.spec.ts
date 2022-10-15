import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationTableComponent } from './presentation-table.component';

describe('PresentationTableComponent', () => {
  let component: PresentationTableComponent;
  let fixture: ComponentFixture<PresentationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
