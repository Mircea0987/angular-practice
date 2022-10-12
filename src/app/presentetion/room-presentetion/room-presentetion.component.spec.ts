import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPresentetionComponent } from './room-presentetion.component';

describe('RoomPresentetionComponent', () => {
  let component: RoomPresentetionComponent;
  let fixture: ComponentFixture<RoomPresentetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomPresentetionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomPresentetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
