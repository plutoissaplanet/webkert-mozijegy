import { Injectable } from '@angular/core';
import {Reservation} from '../models/reservation';
import {AngularFirestore} from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  constructor(private afs: AngularFirestore) { }

  create(visitor: Reservation){
    return this.afs.collection<Reservation>("Reservations").doc(visitor.id).set(visitor);
  }

  getAll(){

  }

  update(){

  }

  delete(){

  }
 
}
