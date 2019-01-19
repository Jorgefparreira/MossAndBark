import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Garden } from '../components/garden-service/garden';
import { GardenService }  from '../components/garden-service/garden.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-garden-detail',
  templateUrl: './garden-detail.component.html',
  styleUrls: ['./garden-detail.component.css']
})
export class GardenDetailComponent implements OnInit {

  public payPalConfig?: PayPalConfig;

  // @Input() garden: Garden;

  images: Array<string>;


goBack(): void {
  this.location.back();
}

public items: Observable<any[]>;

constructor(
  private route: ActivatedRoute,
  private gardenService: GardenService,
  private location: Location, 
  config: NgbCarouselConfig,
  private _http: HttpClient,
  public db: AngularFirestore

) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.images = []  

}


  public ngOnInit(): void {
    this.initConfig();
    this.getGarden();
  }

 
  getGarden(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.gardenService.getGarden(id)
    //   .subscribe(garden => this.garden = garden);     
    this.items = this.db.collection('/gardens', ref => ref.where('id', '==', id)).valueChanges();        
  }

  getHeight(){}
 

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'GBP',
          total: 9
        }
      }]
    });
  }  

}
