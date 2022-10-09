export interface Room{
    totalRooms:number,
    availableRooms:number,
    bookedRooms:number,

}

export interface RoomList{
    roomType:string,
    price:number,
    roomNumber:number
    photos:string,
    amnities:string,
    checkInDate:Date,
    checkOutTime:Date,
    rating:number,
}