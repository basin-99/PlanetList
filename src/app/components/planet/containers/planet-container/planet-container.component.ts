import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectPlanetList, selectNextPlanetLink } from 'src/app/selectors/planet.selectors';
import { GetPlants, GetNextPlanetInfo } from 'src/app/actions/planets.actions';
import { PlanetData } from 'src/app/models/planet-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planet-container',
  templateUrl: './planet-container.component.html',
  styleUrls: ['./planet-container.component.scss']
})

export class PlanetContainerComponent implements OnInit {

  planet$: Observable<PlanetData[]>;
  nextPageLink$: Observable<string>;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.dispatch(new GetPlants());
    this.planet$ = this._store.pipe(select(selectPlanetList));
    this.nextPageLink$ = this._store.pipe(select(selectNextPlanetLink));
  }

  redirectToNextPage(nextPageLink) {
    this._store.dispatch(new GetNextPlanetInfo(nextPageLink) );
  }

}
