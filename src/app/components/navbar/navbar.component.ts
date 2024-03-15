import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
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
