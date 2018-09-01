import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moss And Bark';

  public onActivate(event : any) {  
  	$(".general-container").css("min-height", $(window).height() - 120);
	
  }

  ngOnInit() {
  	console.log('%cDeveloped by Web Archaeologist - www.web-archaeologist.co.uk', 'background: #222; color: #bada55; width: 100%;');
  }  

}
