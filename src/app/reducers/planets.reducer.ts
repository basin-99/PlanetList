import { GET_PLANETS, GET_PLANETS_SUCCESS, SET_PLANETS_PAGEINFO, GET_NEXT_PLANETS_INFO_SUCCESS } from '../actions/constants.actions';
import * as PlanetsActions from '../actions/planets.actions';
import { PlanetState, initialPlanetState } from '../state/planet.state';

export const planetReducers = (state = initialPlanetState, action: PlanetsActions.Actions): PlanetState => {
    switch (action.type) {
        case GET_PLANETS_SUCCESS: {
            return {
                ...state,
                planetList: action.payload,
            };
        }
        case GET_NEXT_PLANETS_INFO_SUCCESS: {
            const newState: PlanetState = { ...state };
            newState.planetList = [...state.planetList, ...action.payload];
            return newState;
        }
        case SET_PLANETS_PAGEINFO: {
            return {
                ...state,
                nextPage: action.payload
            };
        }
        default:
            return state;
    }
};
