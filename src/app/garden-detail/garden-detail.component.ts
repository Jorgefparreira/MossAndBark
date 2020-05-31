import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Component, OnInit, Input } from "@angular/core";
import { GardenService } from "../services/garden.service";
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { paypal } from "../../environments/environment";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-garden-detail",
  templateUrl: "./garden-detail.component.html",
  styleUrls: ["./garden-detail.component.scss"]
})
export class GardenDetailComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  public garden;
  link: string;

  constructor(
    private route: ActivatedRoute,
    private gardenService: GardenService,
    private location: Location,
    public db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.garden = {
      price: 0
    }
    this.link = this.route.snapshot.paramMap.get("link");
    this.getGarden(this.link);
  }

  getGarden(link): void {
    this.gardenService
      .getGarden(link)
      .subscribe(garden => (
        this.garden = garden[0],
        this.initConfig()
      ));   
  }

  goBack(): void {
    this.location.back();
  }

  private initConfig(): void {
    this.payPalConfig = {
        currency: 'GBP',
        clientId: paypal.key,
        createOrderOnClient: (data) => <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'GBP',
                value: this.garden.price,
                breakdown: {
                  item_total: {
                    currency_code: 'GBP',
                    value: this.garden.price
                  }
                }
              },
              items: [
                {
                  name: this.garden.name,
                  quantity: '1',
                  unit_amount: {
                    currency_code: 'GBP',
                    value: this.garden.price,
                  },
                }
              ]
            }
          ]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
          console.log('onApprove - transaction was approved, but not authorized', data, actions);
          actions.order.get().then(details => {
            console.log('onApprove - you can get full order details inside onApprove: ', details);
          });
        },
        onClientAuthorization: (data) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        },
        onCancel: (data, actions) => {
          console.log('OnCancel', data, actions);
        },
        onError: err => {
          console.log('OnError', err);
        },
        onClick: (data, actions) => {
          console.log('onClick', data, actions);
        },
    };
}
}
