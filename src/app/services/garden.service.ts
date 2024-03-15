import { Injectable } from '@angular/core';
import { Firestore, collection,collectionData, getDocs, query, where } from '@angular/fire/firestore';

import { Garden } from './gardens';
import { Observable, of } from 'rxjs';
// import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GardenService {

  constructor(
    public firestore: Firestore,
    // garden: Observable<Garden>
  ) { }

  async getGardens() {
    return (
      await getDocs(query(collection(this.firestore, 'gardens')))
    ).docs.map((gardens) => gardens.data());
  }

  // getGarden(link: string): Observable<Garden> {
  //   let garden = this.afs.collection('/gardens', ref => ref.where('link', '==', link)).valueChanges();
  //   return garden
  // //   return of(GARDENS.find(garden => garden.id === id));
  // }	

  async getGarden(id: string) {
    return  (
      await getDocs(query(collection(this.firestore, 'gardens'), where("id", "==", id)))
    ).docs[0].data()
  }

}
