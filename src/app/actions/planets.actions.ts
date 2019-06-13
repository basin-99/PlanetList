import {
    GET_PLANETS,
    GET_PLANETS_SUCCESS,
    SET_PLANETS_PAGEINFO,
    GET_NEXT_PLANETS_INFO,
    GET_NEXT_PLANETS_INFO_SUCCESS
} from './constants.actions';
import { PlanetData } from '../models/planet-data';
import { Action } from '@ngrx/store';

export class GetPlants implements Action {
    public readonly type = GET_PLANETS;
}

export class GetNextPlanetInfo implements Action {
    public readonly type = GET_NEXT_PLANETS_INFO;
    constructor(public nextPageLink: string) { }
}

export class GetNextPlanetInfoSuccess implements Action {
    public readonly type = GET_NEXT_PLANETS_INFO_SUCCESS;
    constructor(public payload: PlanetData[]) { }
}

export class GetPlanetsSuccess implements Action {
    public readonly type = GET_PLANETS_SUCCESS;
    constructor(public payload: PlanetData[]) {
        console.log(payload);
    }
}

export class SetNextPlanetPage implements Action {
    public readonly type = SET_PLANETS_PAGEINFO;
    constructor(public payload: string) {
    }
}

export type Actions = GetPlants | GetPlanetsSuccess | SetNextPlanetPage | GetNextPlanetInfo | GetNextPlanetInfoSuccess;
