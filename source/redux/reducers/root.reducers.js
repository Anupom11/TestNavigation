import {combineReducers} from 'redux';

import textBodyCounter from './Body.reducers';
import textTitleCounter from './Title.reducers';

export default combineReducers({
    textBodyCounter: textBodyCounter, textTitleCounter:textTitleCounter
});

