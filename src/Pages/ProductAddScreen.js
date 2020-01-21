import React, { Component } from 'react';
import { View } from 'react-native';
import MyButton from './Component/MyButton'
import MyText from './Component/MyText'

export default class ProductAddScreen extends Component {
  static navigationOptions = {
    title: 'Add Product',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MyText text = 'Add Product' />

        <MyButton
          title="Go to Add Product... again"
          customClick={() => this.props.navigation.push('AddProduct')}
        />
        <MyButton
          title="Go to Home"
          customClick={() => this.props.navigation.navigate('Product')}
        />
        <MyButton
          title="Go back"
          customClick={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}