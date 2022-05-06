import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.scss']
})
export class ReservedComponent implements OnInit {

  name= new FormControl('');
  phonenumber= new FormControl('');

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getReservation(){
    if (this.name.value==='Polanek Eszter' && this.phonenumber.value==='citromospite'){
      this.router.navigateByUrl('/main');
    } else {
      console.error('Valami incorrect');
    }
  }

}
