import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  
    movie= new FormGroup({
      movies: new FormControl('')
    })

    timeForm = new FormGroup({
        hour: new FormControl(''),
        date: new FormControl('')
      
    })
  
  reservationForm = new FormGroup({
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    date: new FormControl(''),
    seat: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });


  
  constructor() { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    console.log(this.movie.value);
    console.log(this.timeForm.value);
    console.log(this.reservationForm.value);
    
  }

}
