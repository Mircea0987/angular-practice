import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFirstComponent } from './presentation-first.component';

describe('PresentationFirstComponent', () => {
  let component: PresentationFirstComponent;
  let fixture: ComponentFixture<PresentationFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
