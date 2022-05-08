import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.scss']
})
export class ReservedComponent implements OnInit {

  email= new FormControl('');
  password= new FormControl('');

  constructor(private router: Router, private AuthService: AuthService) { }

  ngOnInit(): void {
  }
    async getTicket(){
      this.AuthService.lekerdezes(this.email.value, this.password.value).then(cred => {
        console.log(cred);
        this.router.navigateByUrl('/showreserved');
      })
    }
  //getReservation(){
  //  if (this.name.value==='Polanek Eszter' && this.password.value==='citromospite'){
  //    this.router.navigateByUrl('/main');
  //  } else {
  //    console.error('Valami incorrect');
  //  }
  //}

}
