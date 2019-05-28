import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
import { PlanetListComponent } from '../planet-list/planet-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {
  constructor( private planetManager: PlanetsService, private activatedRoute: ActivatedRoute ) { }

  
  ngOnInit() {
    this.prepareView();
  }

  prepareView(){
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      console.log(id);
      this.planetManager.getPlanetInfo(id).subscribe((response) => {
        console.log(response);
      }, error => {
        console.log(error);
        }
      );
    
    });
  }
}
