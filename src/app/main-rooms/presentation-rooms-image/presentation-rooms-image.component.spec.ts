import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationRoomsImageComponent } from './presentation-rooms-image.component';

describe('PresentationRoomsImageComponent', () => {
  let component: PresentationRoomsImageComponent;
  let fixture: ComponentFixture<PresentationRoomsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationRoomsImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationRoomsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
