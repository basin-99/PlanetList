import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { planetReducers } from './planets.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
    planetList: planetReducers
};
