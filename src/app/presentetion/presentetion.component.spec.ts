import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentetionComponent } from './presentetion.component';

describe('PresentetionComponent', () => {
  let component: PresentetionComponent;
  let fixture: ComponentFixture<PresentetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentetionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
