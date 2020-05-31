import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public showNav: string = "";

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar(){
    if(this.showNav === 'showNav'){
      this.showNav = "";
    } else {
      this.showNav = 'showNav';
    }
  }
}
