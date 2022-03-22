import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userArr: User[] = [];

  constructor() {
    let u1 = new User(1, "kushi@gmail.com", "kushi@123");
    let u2 = new User(1, "Mahitha@gmail.com", "mahi@123");
    let u3 = new User(1, "Bhavana@gmail.com", "bhavu@123");

    this.userArr.push(u1);
    this.userArr.push(u2);
    this.userArr.push(u3);




  }


 // getAllUsers(): Observable<User[]> {
    //return of(this.userArr);

 // }
 getAllUsers(){
   return this.userArr;
 }

}

