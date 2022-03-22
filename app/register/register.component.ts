import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/User';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userArr:User[]=[];


  constructor(private service:UserServiceService) { 
    this.service.getAllUsers().subscribe(s => console.log(s));

    
  }

  getAllusers() {
    this.service.getAllUsers().subscribe(s => console.log(s));
  }
  ngOnInit() {
  }

}
