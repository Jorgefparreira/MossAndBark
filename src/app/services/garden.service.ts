import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { GARDENS } from './gardens';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

export class Garden {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class GardenService {
	gardensCollection: AngularFirestoreCollection<Garden>;
	gardens;
	garden;

	constructor(
    public afs: AngularFirestore
	) {
		this.gardensCollection = this.afs.collection<Garden>('gardens');       
	}

	public getGardens(): Observable<Garden[]> {
		this.gardens = this.gardensCollection.snapshotChanges().pipe(map(actions => {
			return actions.map(action => {
				const data = action.payload.doc.data() as Garden;
				const id = action.payload.doc.id;
				return { id, ...data };
			});
		})); 
		return this.gardens
	}

	getGarden(link: string): Observable<Garden> {
	  this.garden = this.afs.collection('/gardens', ref => ref.where('link', '==', link)).valueChanges();
	  return this.garden
	//   return of(GARDENS.find(garden => garden.id === id));
	}	



}
