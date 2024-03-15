import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GardenService } from '../../services/garden.service';
import { Garden } from '../../services/gardens';
// import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gardens',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './gardens.component.html',
  styleUrl: './gardens.component.scss'
})

export class GardensComponent implements OnInit { 
  // gardens:Garden[] = [];
  public gardens:any = [];

  constructor(
    private gardenService: GardenService
  ) { }


  async ngOnInit() {
    await this.gardenService.getGardens().then((response)=>{
      this.gardens = response
      console.log(this.gardens)
    })
    
  }

}