import { combineReducers } from 'redux';
import { authReducer}  from './auth/reducers/auth.reducer';
// import errorReducer from './errorReducer';
// import { postReducer } from './postReducer';
// import { flowReducer } from './flowReducer';

export default combineReducers({
    auth : authReducer
});