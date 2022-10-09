import { Injectable } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomsList: RoomList[] = [ 
    {
      roomType:"Deluxe Room",
      price: 500,
      roomNumber: 31,
      photos: "https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg",
      amnities: "air conditioner, free Wi-Fi, TV , Bathroom, Kitchen ",
      checkInDate: new Date("11-Nov-2022"),
      checkOutTime: new Date("15-Nov-2022"),
      rating: 5
  
    },
    {
      
        roomType:"Extra Room",
        price: 100,
        roomNumber: 34,
        photos: "https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg",
        amnities: "Air Conditioner, Free Wi-Fi, TV , Bathroom, Kitchen, Bar, Pool ",
        checkInDate: new Date("20-Nov-2022"),
        checkOutTime: new Date("25-Nov-2022"),
        rating: 2.5,

    }
  ]

  constructor() { }

  getRooms(){
    return this.roomsList
  }


}
