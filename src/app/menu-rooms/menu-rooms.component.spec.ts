import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRoomsComponent } from './menu-rooms.component';

describe('MenuRoomsComponent', () => {
  let component: MenuRoomsComponent;
  let fixture: ComponentFixture<MenuRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
