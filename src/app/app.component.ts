import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GardensComponent }   from './pages/gardens/gardens.component';
import { ContactComponent }   from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,NavbarComponent,GardensComponent,ContactComponent],
  // imports:[],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  onActivate(e:any) {
    console.log(e)
  }

  ngOnInit() {
    console.log(
      "%cDeveloped by Web Archaeologist www.web-archaeologist.co.uk",
      "background: #4f3215; color: #fff; width: 100%; padding: 5px;"
    );
  }
}
