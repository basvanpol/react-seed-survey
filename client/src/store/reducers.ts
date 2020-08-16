import { surveyReducers } from './survey/reducers/survey.reducers';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({
    survey: surveyReducers
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>