import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { GetPlants, GetPlanetsSuccess, SetNextPlanetPage, GetNextPlanetInfo, GetNextPlanetInfoSuccess } from '../actions/planets.actions';
import { GET_PLANETS, GET_PLANETS_SUCCESS, GET_NEXT_PLANETS_INFO } from '../actions/constants.actions';
import { PlanetsService } from '../components/services/planets/planets.service';

@Injectable()
export class PlanetEffects {

    @Effect()
    getPlanets$ = this._actions$.pipe(
        ofType<GetPlants>(GET_PLANETS),
        switchMap(() => this._planetService.getPlanets()),
        switchMap((planetHttp: any) => [
            new GetPlanetsSuccess(planetHttp.results),
            new SetNextPlanetPage(planetHttp.next),
        ]),
    );

    @Effect()
    getNextPlanetsInfo$ = this._actions$.pipe(
        ofType<GetNextPlanetInfo>(GET_NEXT_PLANETS_INFO),
        switchMap((nextPagePlanetLink) => this._planetService.getNextPlanetsInfo(nextPagePlanetLink)),
        switchMap((planetHttp: any) => [
            new GetNextPlanetInfoSuccess(planetHttp.results),
            new SetNextPlanetPage(planetHttp.next),
        ]),
    );

    constructor(private _actions$: Actions, private _planetService: PlanetsService) { }

}
