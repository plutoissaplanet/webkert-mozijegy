import { Component, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {showingreservedService} from '../../shared/services/showingreserved.service';
import { Reservation } from 'src/app/shared/models/reservation';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-showreserved',
  templateUrl: './showreserved.component.html',
  styleUrls: ['./showreserved.component.scss']
})
export class ShowreservedComponent implements OnInit {

  goToPage='/main';
  reservationObject?: Array<Reservation>;

  constructor(private router: Router, private firestore: AngularFirestore, private showingreservedService: showingreservedService, private authService: AuthService) { }

  ngOnInit(): void {
    //console.log(this. firestore.collection("Reservations").get())
  }

  logout(kilepes?:boolean){

    this.authService.logout();
    this.router.navigateByUrl(this.goToPage)
    
  }

}
