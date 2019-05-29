import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PlanetData } from 'src/app/models/planet-data';
import { apiEndpoints } from '../../../_helpers/routing.endpoints';

@Injectable({
  providedIn: 'root'
})

export class PlanetsService {
  private planet: PlanetData;
  constructor( private http: HttpClient ) { }

  ngOnInit(){
  }
  
  getPlanets(){
    return this.http.get(apiEndpoints.plantesList)
      .pipe(map(response => response));
  }

  getPlanetInfo(id){
    return this.http.get(apiEndpoints.planetInfo.format(id))
      .pipe(map(response => response));
  }
}
