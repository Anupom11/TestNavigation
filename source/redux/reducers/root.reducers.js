import {combineReducers} from 'redux';

import textCounter from './Body.reducers';
import test1 from './Title.reducers';

export default combineReducers({
    textCounter: textCounter, test1:test1
});

