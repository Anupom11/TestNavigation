import {createStore, combineReducers, compose/* , applyMiddleware*/} from 'redux';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from '../redux/reducers/root.reducers';

export const store = createStore(rootReducer);

/* const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
} */

//const composedEnhancer = compose(/* applyMiddleware(someReduxMiddleware, someOtherReduxMiddleware),*/ ...enhancerList);

/* const initStore = () => createStore(rootReducer, {}, composedEnhancer);

module.exports = {
  initStore
}; */

