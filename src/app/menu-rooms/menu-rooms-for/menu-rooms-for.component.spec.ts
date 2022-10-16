import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRoomsForComponent } from './menu-rooms-for.component';

describe('MenuRoomsForComponent', () => {
  let component: MenuRoomsForComponent;
  let fixture: ComponentFixture<MenuRoomsForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRoomsForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRoomsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
