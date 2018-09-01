import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { GardensComponent } from './gardens/gardens.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GardenDetailComponent } from './garden-detail/garden-detail.component';
import { NgbdCarouselBasic }  from './carousel-config';

@NgModule({
  declarations: [
    AppComponent,
    GardensComponent,
    HomeComponent,
    ContactComponent,
    GardenDetailComponent,
    NgbdCarouselBasic
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
