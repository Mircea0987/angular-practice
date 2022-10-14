import { Injectable } from '@angular/core';
import { RoomsMenuInterface } from 'src/Interfaces/roomsMenuInterface';

@Injectable({
  providedIn: 'root'
})
export class RoomsMenuService {

  roomsMenu:RoomsMenuInterface[] = [{
    roomType: "Classic Room",
    amnieties:"18m^2",
    id: 1
  },
  {
    roomType: "Deluxe Room",
    amnieties:"24m^2 Sea View",
    id: 2
  },{
    roomType: "Junior Suite",
    amnieties:"30m^2 Sea View Balcony",
    id: 3
  },
]
getRoomsMenu(){
  return this.roomsMenu
}

  constructor() { }

}
