import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RoomsListComponent implements OnInit {

@Input() roomList:RoomList[] = [];

@Output() selectedRoom = new EventEmitter<RoomList>()
  

  constructor() { }


  ngOnInit(): void {}

  selectRoom(room:any){
    this.selectedRoom.emit(room)
  }


}
