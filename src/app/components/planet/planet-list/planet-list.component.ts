import { Component, OnInit, ViewChild, Output, EventEmitter, Input, AfterViewChecked, OnChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PlanetData } from 'src/app/models/planet-data';
import { PlanetsService } from '../../services/planets/planets.service';
import { getPlanetId } from '../../../_helpers/api-helper';
import { Router } from '@angular/router';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnChanges {

  @Input() planetList: any;

  @Input() nextPageLink: any;

  @Output() nextPageEmit = new EventEmitter<string>();

  displayedColumns: string[] =
    [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
      'action'
    ];

  dataSource: MatTableDataSource<PlanetData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private notification: NotificationsService,
    private planetMenager: PlanetsService,
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnChanges() {
    console.log(this.planetList);
    console.log(this.nextPageLink);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource = new MatTableDataSource(this.planetList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  nextPage() {
    this.nextPageEmit.emit(this.nextPageLink);
  }

  navigateToPlanetInfo(url) {
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
