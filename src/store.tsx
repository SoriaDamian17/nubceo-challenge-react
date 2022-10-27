import { configureStore } from '@reduxjs/toolkit'

export const SW_INIT = 'SW_INIT';
export const SW_UPDATE = 'SW_UPDATE';

export interface IState {
    serviceWorkerInitialized: boolean;
    serviceWorkerUpdated: boolean;
    serviceWorkerRegistration: any;
}
const defaultState = {
    serviceWorkerInitialized: false,
    serviceWorkerUpdated: false,
    serviceWorkerRegistration: null,
};

function rootReducer(state = defaultState, action: any) {
    const stateSW: any = {
        [SW_INIT]: {
            ...state,
            serviceWorkerInitialized: !state.serviceWorkerInitialized,
        },
        [SW_UPDATE]: {
            ...state,
            serviceWorkerUpdated: !state.serviceWorkerUpdated,
            serviceWorkerRegistration: action.payload,
        },
    };
    return stateSW[action.type] ?? state;
}

export default configureStore({
    reducer: rootReducer,
    preloadedState: defaultState,
})
