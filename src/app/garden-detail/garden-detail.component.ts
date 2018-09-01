import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Garden } from '../garden';
import { GardenService }  from '../garden.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-garden-detail',
  templateUrl: './garden-detail.component.html',
  styleUrls: ['./garden-detail.component.css']
})
export class GardenDetailComponent implements OnInit {
  @Input() garden: Garden;

  images: Array<string>;


goBack(): void {
  this.location.back();
}
constructor(
  private route: ActivatedRoute,
  private gardenService: GardenService,
  private location: Location, 
  config: NgbCarouselConfig,
  private _http: HttpClient
) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.images = [
      'assets/images/img1.jpg', 'assets/images/img2.jpg'
    ]  

}

  public ngOnInit(): void {
    this.getGarden();
    this.onLoad();

  }

 
  getGarden(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gardenService.getGarden(id)
      .subscribe(garden => this.garden = garden);         
  }

  onLoad(): void {
    // let height = $(window).height();
    // setTimeout(() => $(".general-container").css("min-height", height - 120);), 2000);
  		// $(".general-container").css("min-height", $(window).height() - 120));  	
  }  

}
