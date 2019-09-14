import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './carousel-config.html',
  providers: [NgbCarouselConfig]
})
export class NgbdCarouselBasic implements OnInit {
  images: Array<string>;

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.images = [
      'assets/images/img1.jpg', 'assets/images/img2.jpg'
    ]    
  }

  ngOnInit() {

  }
}