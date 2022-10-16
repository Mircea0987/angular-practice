import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentetionSecondComponent } from './presentetion-second.component';

describe('PresentetionSecondComponent', () => {
  let component: PresentetionSecondComponent;
  let fixture: ComponentFixture<PresentetionSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentetionSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentetionSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
