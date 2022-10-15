import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSecondComponent } from './presentation-second.component';

describe('PresentationSecondComponent', () => {
  let component: PresentationSecondComponent;
  let fixture: ComponentFixture<PresentationSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
