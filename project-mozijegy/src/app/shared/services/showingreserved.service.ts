import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';


@Injectable({
  providedIn: 'root'
})
export class showingreservedService {

  collectionName="Reservations";
  constructor(private afs: AngularFirestore ) { }
  
  loadInformation(email: string, password: string): Observable<Array<Reservation>> {
    return this.afs.collection<Reservation>(this.collectionName).valueChanges();
  }
}
