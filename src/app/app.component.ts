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
  	console.log('%cDeveloped by Web Archaeologist www.web-archaeologist.co.uk', 'background: #4f3215; color: #fff; width: 100%; padding: 5px;');
  }  

  getHeight(){
    var h = window.innerHeight - 96 + 'px';
    return h;
  }  
  

}
