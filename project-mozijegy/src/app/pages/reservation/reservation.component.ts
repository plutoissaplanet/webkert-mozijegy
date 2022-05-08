import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Reservation} from '../../shared/models/reservation';
import {AuthService} from '../../shared/services/auth.service';
import { ReserveService } from '../../shared/services/reserve.service';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  selected = '';
    
    //timeForm = new FormGroup({
    //    hour: new FormControl(''),
    //    date: new FormControl('')
    //  
    //})
  //
  reservationForm = new FormGroup({
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    password: new FormControl(''),
    movies: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });


  
  constructor (private authService: AuthService, private reserveService: ReserveService) { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    //console.log(this.movie.value);
    //console.log(this.timeForm.value);
    console.log(this.reservationForm.value);
    this.authService.reserve(this.reservationForm.get('email')?.value, this.reservationForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: Reservation = {
        id: cred.user?.uid as string,
        email: this.reservationForm.get('email')?.value,
        phonenumber: this.reservationForm.get('phonenumber')?.value,
        movies: this.reservationForm.get('movies')?.value,
        passcode: this.reservationForm.get('password')?.value,
        name: {
          firstname: this.reservationForm.get('name.firstname')?.value,
          lastname: this.reservationForm.get('name.lastname')?.value
        }
      };

      this.reserveService.create(user).then(_ => {
        console.log('User added successfully.');
      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
  }
  
}
