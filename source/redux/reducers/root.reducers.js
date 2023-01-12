import {combineReducers} from 'redux';
import textCounter from '../reducers/test.reducers';
import test1 from './test1.reducers';

export default combineReducers({
    textCounter: textCounter, test1:test1
});