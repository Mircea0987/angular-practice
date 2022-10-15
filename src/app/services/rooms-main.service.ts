import { Injectable } from '@angular/core';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';

@Injectable({
  providedIn: 'root'
})
export class RoomsMainService {

  roomsMain:RoomsMainInterface[] = [
    {
      id:1,
      title: "Vesper",
      mainImg: "https://www.vesperhotel.com/wp-content/uploads/2020/07/classic-room-vesper-hotel-noordwijk.jpg",
      roomType:"Classic Room",
      description: "Stunning basics for the perfect weekend getaway",
      cardTitle:"Luxurious Essentials",
      cardText:"The Classic Room is uniquely designed for comfort, featuring furniture with a vintage flair and a relaxing rain shower. A custom king size bed and hand stuffed mattress makes this a perfect romantic getaway for two.",
      image1: "https://www.vesperhotel.com/wp-content/uploads/2020/07/classic-room-vesper-hotel-noordwijk-2.jpg",
      image3:"https://www.vesperhotel.com/wp-content/uploads/2020/07/classic-room-vesper-hotel-noordwijk-1.jpg",
      tableAmnities: "18m^2 Espresso machine Great WIfi Handmade bed Flatscreen TV Rainshower Vintage furniture",
      image2: "https://www.vesperhotel.com/wp-content/uploads/2020/07/classic-room-vesper-hotel-noordwijk-3.jpg"
    },
  ]

  getAllRoomsMain(){
    return this.roomsMain
  }

  constructor() { }
}
