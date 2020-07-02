/**
 * @format
 */
import 'react-native-gesture-handler';
 import React from 'react'
import {AppRegistry} from 'react-native';
import Rooter from './src/Rooter';
import {name as appName} from './app.json';
import { applyMiddleware,combineReducers,createStore} from 'redux'
import thunk from 'redux-thunk'
import cardReducer from './src/redux/reducers/cardReducer'
import mechaReducer from './src/redux/reducers/mechaReducer'



const rootReducer = combineReducers({
    cardss:cardReducer,
    mechas:mechaReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

AppRegistry.registerComponent(appName, () =>Rooter);
