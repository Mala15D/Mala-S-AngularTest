import { Injectable } from '@angular/core';
import { Room } from 'src/model/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  room:Room[]=[];
  
  constructor() { 
    let r1=new Room(1,"2BHK");
    let r2=new Room(2,"BHK");

    this.room.push(r1);
    this.room.push(r2);


  }
  getAllRooms(){
    return this.room;

  }
  addNewRoom(r:Room){
    this.room.push(r);
  
  }
}
