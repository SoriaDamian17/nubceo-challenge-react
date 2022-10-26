import { createStore } from 'redux';
import { SW_INIT, SW_UPDATE } from './swtypes';

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

function configureStore() {
    return createStore(rootReducer, {
        serviceWorkerInitialized: false,
        serviceWorkerUpdated: false,
        serviceWorkerRegistration: null,
    });
}

export default configureStore;
