import { Component, OnInit } from '@angular/core';
import { Garden } from '../components/garden-service/garden';
import { GardenService } from '../components/garden-service/garden.service';
declare var $: any;

@Component({
  selector: 'app-gardens',
  templateUrl: './gardens.component.html',
  styleUrls: ['./gardens.component.css']
})

export class GardensComponent implements OnInit { 
  gardens: Garden[];


getGardens(): void {
  this.gardenService.getGardens()
      .subscribe(gardens => this.gardens = gardens);
} 


  constructor(private gardenService: GardenService) { }

  ngOnInit() {
  	this.getGardens();

		$(".product-img-box").on({
			mouseenter: function(){
				$(this).find(".product-img").css("transform", "scale(1.1)");
				$(this).find(".product-text-bg").show();
				$(this).find(".product-text").show();
				$(this).find(".product-text-bg").animate({bottom: '0px'});
				$(this).find(".product-text").animate({bottom: '0px'});
			},
			mouseleave: function(){
				$(this).find(".product-img").css("transform", "scale(1.0)");
				$(this).find(".product-text-bg").animate({bottom: '-30px'});
				$(this).find(".product-text").animate({bottom: '-30px'});		
				$(this).find(".product-text-bg").fadeOut();
				$(this).find(".product-text").fadeOut();										
			}
		})
  	
  }
} 
