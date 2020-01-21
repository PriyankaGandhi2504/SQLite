import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MyButton from './Component/MyButton'
import MyText from './Component/MyText'

export default class ProductDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Product Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <MyText text = 'Product Details'/>
        
        <MyButton title="Go to Details... again"
          customClick={() => this.props.navigation.push('ProductDetails')}
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