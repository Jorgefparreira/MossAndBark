import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { NgxPayPalModule } from 'ngx-paypal';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { GardensComponent } from './gardens/gardens.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GardenDetailComponent } from './garden-detail/garden-detail.component';
// import { NgbdCarouselBasic }  from './components/garden-carousel/carousel-config';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaperPlaneComponent } from '../assets/svgs/paper-plane/paper-plane.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GardensComponent,
    HomeComponent,
    ContactComponent,
    GardenDetailComponent,
    // NgbdCarouselBasic,
    NavbarComponent,
    FooterComponent,
    PaperPlaneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // NgbModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
