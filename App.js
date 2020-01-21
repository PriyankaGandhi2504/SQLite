/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import ProductScreen from './src/Pages/ProductScreen';
import Router from './src/Router';
import ProductAddScreen from './src/Pages/ProductAddScreen';
import ProductEditScreen from './src/Pages/ProductEditScreen';

class App extends Component {
  render() {
    return (
      <Router/>
      // <ProductEditScreen/>
      // <ProductScreen/>
    );
  }
};

export default App;
