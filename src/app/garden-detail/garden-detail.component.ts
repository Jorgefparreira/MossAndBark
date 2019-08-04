import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Component, OnInit, Input } from "@angular/core";
import { GardenService } from "../services/garden.service";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import {
  PayPalConfig,
  PayPalEnvironment,
  PayPalIntegrationType
} from "ngx-paypal";
import { paypal } from "../../environments/environment";
import { AngularFirestore } from "angularfire2/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-garden-detail",
  templateUrl: "./garden-detail.component.html",
  styleUrls: ["./garden-detail.component.css"]
})
export class GardenDetailComponent implements OnInit {
  public payPalConfig?: PayPalConfig;
  public garden;
  link: string;
  images: Array<string>;

  constructor(
    private route: ActivatedRoute,
    private gardenService: GardenService,
    private location: Location,
    config: NgbCarouselConfig,
    public db: AngularFirestore
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.garden = {
      price: 0
    }
    this.link = this.route.snapshot.paramMap.get("link");
    this.initConfig()
    this.getGarden(this.link);
    this.images = [];
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
    this.payPalConfig = new PayPalConfig(
      PayPalIntegrationType.ClientSideREST,
      PayPalEnvironment.Sandbox,
      {
        commit: true,
        client: {
          sandbox: paypal.key
        },
        button: {
          label: "paypal",
          tagline: false
        },
        onPaymentComplete: (data, actions) => {
          console.log("OnPaymentComplete");
        },
        onCancel: (data, actions) => {
          console.log("OnCancel");
        },
        onError: err => {
          console.log("OnError");
        },
        transactions: [
          {
            amount: {
              currency: "GBP",
              total: this.garden.price
            }
          }
        ]
      }
    );
  }
}
