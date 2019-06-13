import { PlanetData } from '../models/planet-data';

export interface PlanetState {
    planetList: PlanetData[];
    nextPage: string;
}

export const initialPlanetState: PlanetState = {
    planetList: null,
    nextPage: ''
};
