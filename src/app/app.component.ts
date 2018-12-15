import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moss And Bark';

  onActivate(){
    
  }

  ngOnInit() {
  	console.log('%cDeveloped by Web Archaeologist - www.web-archaeologist.co.uk', 'background: #222; color: #bada55; width: 100%;');
  }  

  getHeight(){
    var h = window.innerHeight - 126 + 'px';
    return h;
  }  
  

}
