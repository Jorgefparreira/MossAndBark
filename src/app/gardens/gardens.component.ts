import { Component, OnInit } from '@angular/core';
import { GardenService } from '../services/garden.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-gardens',
  templateUrl: './gardens.component.html',
  styleUrls: ['./gardens.component.scss']
})

export class GardensComponent implements OnInit { 
	gardens;
	public items: Observable<any[]>;	

  constructor(
		private gardenService: GardenService,
		db: AngularFirestore
		) { 
			this.items = db.collection('/gardens').valueChanges();
		}

		ngOnInit() {
			this.gardenService.getGardens().subscribe(gardens => {
				this.gardens = gardens
			});
			
		}

} 
