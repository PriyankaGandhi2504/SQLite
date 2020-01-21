import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import MyText from './Component/MyText'
import MyButton from './Component/MyButton'

export default class ProductEditScreen extends Component {
  static navigationOptions = {
    title: 'Edit Product',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MyText text = 'Add Product' />

        <MyButton title="Go to Edit Product... again"
          customClick={() => this.props.navigation.push('EditProduct')}
        />
        <MyButton title="Go to Home"
          customClick={() => this.props.navigation.navigate('Product')}
        />
        <MyButton title="Go back"
          customClick={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}