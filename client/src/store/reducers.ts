import { surveyReducers } from './survey/reducers/survey.reducers';

import { combineReducers } from 'redux';
import { authReducer}  from './auth/reducers/auth.reducer';
// import errorReducer from './errorReducer';
// import { postReducer } from './postReducer';
// import { flowReducer } from './flowReducer';
export const rootReducer = combineReducers({
    auth : authReducer,
    survey: surveyReducers
});


export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>