/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import MainApp from './source/main';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => MainApp);
