import { Injectable } from '@angular/core';
import { Garden } from './garden';
import { GARDENS } from './gardens';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GardenService {
	getGardens(): Observable<Garden[]> {
	  return of(GARDENS);
	}

	getGarden(id: number): Observable<Garden> {
	  // this.messageService.add(`GardenService: fetched garden id=${id}`);
	  return of(GARDENS.find(garden => garden.id === id));
	}	

  constructor() { }


}
