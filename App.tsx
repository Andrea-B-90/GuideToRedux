/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Router from './js/src/navigation/Router';
import { Provider } from 'react-redux';
import store from './js/src/redux/store/store';

export const App = () => {
  return ( 
  <Provider store={store}>
    <Router />
  </Provider> );
}
