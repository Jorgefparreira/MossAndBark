import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardensComponent }   from './pages/gardens/gardens.component';
import { GardenDetailComponent } from './pages/garden-detail/garden-detail.component';
import { ContactComponent }   from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'gardens', pathMatch: 'full' },
  { path: 'gardens', component: GardensComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detail/:link', component: GardenDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],	
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
