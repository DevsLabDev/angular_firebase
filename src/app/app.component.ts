import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Partido } from './partido';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  partidos: Observable<Partido[]>;
  nuevo: AngularFireList<Partido>;
  private itemDoc: AngularFirestoreDocument<Partido>;
  item: Observable<Partido>;
  constructor (public afAuth: AngularFireAuth, public db: AngularFireDatabase,
  public afs: AngularFirestore) {
    this.partidos = this.db.list<Partido>('partido').valueChanges();
    this.nuevo = this.db.list<Partido>('partido');
    this.itemDoc = afs.doc<Partido>('partido/1');
    this.item = this.itemDoc.valueChanges();
    console.log;
  }

  updateItem(local: String, visitante: String, ganador: String, marcador_local: number, marcador_visitante: number) {
    this.itemDoc.update({
      local: local, visitante: visitante, ganador: ganador,
      marcador_local: marcador_local, marcador_visitante: marcador_visitante
    });
  }

  ngOnInit() {}

  guardar(local: String, visitante: String, ganador: String, marcador_local: number, marcador_visitante: number) {
    this.nuevo.push({
      local: local, visitante: visitante, ganador: ganador,
      marcador_local: marcador_local, marcador_visitante: marcador_visitante
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
