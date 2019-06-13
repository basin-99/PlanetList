import { initialPlanetState, PlanetState } from './planet.state';

export interface AppState {
    planetList: PlanetState;
}

export const initialAppState: AppState = {
    planetList: initialPlanetState
};

export function getInitialState(): AppState {
    return initialAppState;
}
