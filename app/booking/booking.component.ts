import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/model/Booking';
import { User } from 'src/model/User';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingArr:Booking[]=[];
  userArr:User[]=[];
  constructor(private service:UserServiceService) {
    service.getAllUsers;
   }

  
  ngOnInit() {
  }

}
