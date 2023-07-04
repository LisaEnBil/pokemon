import { Action, combineReducers } from 'redux';

const appReducer = combineReducers({
});

type AppReducer = typeof appReducer;

const rootReducer: AppReducer = (state, action: Action) => {
    return appReducer(state, action);
};

export default rootReducer;
