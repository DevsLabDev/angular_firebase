import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Partido } from './partido';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  partidos: Observable<Partido[]>;
  nuevo: AngularFireList<Partido>;
  constructor (public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.partidos = this.db.list<Partido>('partido').valueChanges();
    this.nuevo = this.db.list<Partido>('partido');
  }

  ngOnInit() {}

  guardar(local: String, visitante: String, ganador: String, marcador_local: number, marcador_visitante: number){
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
