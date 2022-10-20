import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomsMainInterface } from 'src/Interfaces/roomsMainInterface';
import { RoomsMainService } from '../services/rooms-main.service';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  room:RoomsMainInterface = {
    id: 0,
    roomTypeMenu: '',
    amnieties: '',
    title: '',
    mainImg: '',
    roomType: '',
    description: '',
    cardTitle: '',
    cardText: '',
    image1: '',
    image3: '',
    tableAmnities: '',
    image2: ''
  }

  constructor(private service:RoomsMainService) { }

  ngOnInit(): void {
  }
  addRoom(roomsForm:NgForm){
    this.service.addRoomsMain(this.room).subscribe((data)=>{
      console.log(data)
      roomsForm.resetForm({
        id: 0,
    roomTypeMenu: '',
    amnieties: '',
    title: '',
    mainImg: '',
    roomType: '',
    description: '',
    cardTitle: '',
    cardText: '',
    image1: '',
    image3: '',
    tableAmnities: '',
    image2: ''
      })
    })
  }

}
