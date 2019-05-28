import { Component, OnInit, ViewChild, Output , EventEmitter, Input} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { PlanetData } from 'src/app/models/planet-data';
import { PlanetsService } from '../../services/planets.service';
import { getPlanetId } from '../../../_helpers/api-helper';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population', 'action'];
  dataSource: MatTableDataSource<PlanetData>;
  planets: PlanetData[] = []


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( 
    private planetMenager: PlanetsService,
    private router: Router
    ) { 
    this.dataSource = new MatTableDataSource();
    this.getPlanets();
  }

  ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 
  }

  getPlanets(){
    this.planetMenager.getPlanets().subscribe((response) => {
      const data = response as any;
      this.planets = data.results as PlanetData[];
      this.dataSource = new MatTableDataSource(this.planets);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  navigateToPlanetInfo(url){
    const id = getPlanetId(url);
    this.router.navigate(['/planet/info/', id]);
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
