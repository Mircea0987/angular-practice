import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsModelComponent } from './rooms-model.component';

describe('RoomsModelComponent', () => {
  let component: RoomsModelComponent;
  let fixture: ComponentFixture<RoomsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
