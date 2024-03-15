import { ActivatedRoute } from "@angular/router";
import { Location,CommonModule } from "@angular/common";
import { Component, OnInit, Input } from "@angular/core";
import { GardenService } from "../../services/garden.service";
import { Garden } from '../../services/gardens';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
// import { paypal } from "../../environments/environment";
// import { Observable } from "rxjs";

@Component({
  selector: 'app-garden-detail',
  standalone: true,
  imports: [NgbCarouselModule,CommonModule],
  templateUrl: './garden-detail.component.html',
  styleUrl: './garden-detail.component.scss'
})
export class GardenDetailComponent {
  // public payPalConfig?: IPayPalConfig;
  // @Input() garden?: Garden;
  garden: any = {};
  id: any = '';

  constructor(
    private route: ActivatedRoute,
    private gardenService: GardenService,
    private location: Location
  ) { 
  }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("link");
    await this.gardenService.getGarden(this.id).then((response)=>{
      this.garden = response;
      console.log(this.garden)
      // this.initConfig()
    })
  }

  goBack(): void {
    this.location.back();
  }

  // private initConfig(): void {
  //   this.payPalConfig = {
  //     currency: 'GBP',
  //     clientId: paypal.key,
  //     createOrderOnClient: (data) => <ICreateOrderRequest>{
  //       intent: 'CAPTURE',
  //       purchase_units: [
  //         {
  //           amount: {
  //             currency_code: 'GBP',
  //             value: this.garden.price,
  //             breakdown: {
  //               item_total: {
  //                 currency_code: 'GBP',
  //                 value: this.garden.price
  //               }
  //             }
  //           },
  //           items: [
  //             {
  //               name: this.garden.name,
  //               quantity: '1',
  //               unit_amount: {
  //                 currency_code: 'GBP',
  //                 value: this.garden.price,
  //               },
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     advanced: {
  //       commit: 'true'
  //     },
  //     style: {
  //       label: 'paypal',
  //       layout: 'vertical'
  //     },
  //     onApprove: (data, actions) => {
  //       console.log('onApprove - transaction was approved, but not authorized', data, actions);
  //       actions.order.get().then(details => {
  //         console.log('onApprove - you can get full order details inside onApprove: ', details);
  //       });
  //     },
  //     onClientAuthorization: (data) => {
  //       console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
  //     },
  //     onCancel: (data, actions) => {
  //       console.log('OnCancel', data, actions);
  //     },
  //     onError: err => {
  //       console.log('OnError', err);
  //     },
  //     onClick: (data, actions) => {
  //       console.log('onClick', data, actions);
  //     },
  //   };
  // }
}
