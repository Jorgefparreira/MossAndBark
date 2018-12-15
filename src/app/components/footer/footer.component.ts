import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  getYear(){
    var d = new Date();
    var n = d.getFullYear();
    return n    
  }

  constructor() { }

  ngOnInit() {
  }

}
