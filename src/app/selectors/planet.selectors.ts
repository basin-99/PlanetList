import { AppState } from '../state/app.state';
import { PlanetState } from '../state/planet.state';
import {createSelector} from '@ngrx/store';

const selectPlanets = (state: AppState) => state.planetList;

// const selectState = (state: AppState) => state.planetList.;

export const selectPlanetList = createSelector(
    selectPlanets,
    (state: PlanetState) => state.planetList || []
);

export const selectNextPlanetLink = createSelector(
    selectPlanets,
    (state: PlanetState) => state.nextPage
);
