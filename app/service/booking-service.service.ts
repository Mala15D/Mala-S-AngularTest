import { Injectable } from '@angular/core';
import { Booking } from 'src/model/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  bookingAr:Booking[]=[];

  constructor() {
    //let b1=new Booking(1,m,user,"stay",5)

   }
   getAllBooking(){
     return this.bookingAr;
   }
   addNewBooking(b:Booking){
     this.bookingAr.push(b)
   }
}
