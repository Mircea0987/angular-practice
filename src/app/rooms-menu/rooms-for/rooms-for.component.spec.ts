import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsForComponent } from './rooms-for.component';

describe('RoomsForComponent', () => {
  let component: RoomsForComponent;
  let fixture: ComponentFixture<RoomsForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
