import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {

  constructor(private afs:AngularFirestore) { }
  getCommands(){
    return this.afs.collection('/commands').snapshotChanges();
  }
}
