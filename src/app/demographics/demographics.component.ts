import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { GeometryService } from '../services/geometry.service';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss']
})

export class DemographicsComponent implements OnInit {

  features = [];

  constructor(private apiService: ApiService, private geometryService: GeometryService) {}

  ngOnInit(){
    this.apiService.getDemographics().subscribe((data: any)=>{
      console.log(data.features);
      this.features = data.features;
    });
  }

  onClick(id: number){
    console.log("Clicked",id);
    const rings = this.features[id].geometry.rings;
    console.log("Rings",rings);
    this.geometryService.setPolygon(rings);
  }

}
