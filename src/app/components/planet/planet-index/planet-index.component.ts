import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanetsService } from '../../services/planets/planets.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectPlanetList } from 'src/app/selectors/planet.selectors';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PlanetData } from 'src/app/models/planet-data';
import { GetPlants } from 'src/app/actions/planets.actions';
import { getPlanetId } from 'src/app/_helpers/api-helper';

@Component({
  selector: 'app-planet-index',
  templateUrl: './planet-index.component.html',
  styleUrls: ['./planet-index.component.scss']
})
export class PlanetIndexComponent implements OnInit {


  constructor(

  ) { }

  ngOnInit() {

  }



}
