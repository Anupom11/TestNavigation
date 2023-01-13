import {combineReducers} from 'redux';
import textCounter from './Test.reducers';
import test1 from './Test1.reducers';

export default combineReducers({
    textCounter: textCounter, test1:test1
});