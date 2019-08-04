import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GardensComponent }   from './gardens/gardens.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GardenDetailComponent } from './garden-detail/garden-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'gardens', pathMatch: 'full' },
  { path: 'gardens', component: GardensComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detail/:link', component: GardenDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],	
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
