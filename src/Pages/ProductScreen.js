import React, { Component } from 'react';
import { FlatList, ActivityIndicator, View, Button, Text } from 'react-native';
import MyButton from './Component/MyButton';
import MyText from './Component/MyText';
import ProductDetails from './ProductDetailsScreen'
import AddProduct from './ProductAddScreen'
import EditProduct from './ProductEditScreen'
import Database from '../Database';
import styles from './Stylesheets'
import { TouchableOpacity } from 'react-native-gesture-handler';

const db = new Database();

export default class ProductScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      products: [],
      notFound: 'Products not found.\nPlease click (+) button to add it.'
    };
    console.disableYellowBox = true
  }

  componentDidMount() {
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      this.getProducts();
    });
  }

  getProducts() {
    let products = [];
    db.listProduct().then((data) => {
      products = data;
      this.setState({
        products,
        isLoading: false,
      });
    }).catch((err) => {
      console.log(err);
      this.setState = {
        isLoading: false
      }
    })
  }

  keyExtractor = (item, index) => index.toString()

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Product List',
      headerRight: (
        <MyButton title='Options'
          customClick={() => {
            navigation.navigate('AddProduct', {
              onNavigateBack: this.handleOnNavigateBack
            });
          }} />
      )
    };
  };

  renderItem = ({ item }) => (

    <TouchableOpacity onPress={() => {
      this.props.navigation.navigate('ProductDetails', {
        prodId: `${item.prodId}`,
      });
    }}>
      <View>
        <Text> {item.prodName}</Text>
      </View>
    </TouchableOpacity>
    // <ListItem
    //   title={item.prodName}
    //   leftAvatar={{
    //     source: item.prodImage && { uri: item.prodImage },
    //     title: item.prodName[0]
    //   }}
    //   onPress={() => {
    //     this.props.navigation.navigate('ProductDetails', {
    //       prodId: `${item.prodId}`,
    //     });
    //   }}
    //   chevron
    //   bottomDivider
    // />
  )

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    if (this.state.products.length === 0) {
      return (
        <View>
          <Text style={styles.message}>{this.state.notFound}</Text>
        </View>
      )
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
        <MyText text="SQLite Example" />

        <MyButton title="Go To Details"
          customClick={() => this.props.navigation.navigate('ProductDetails')}
        />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.products}
          renderItem={this.renderItem}
        />
        <MyButton title="Go To Add Product"
          customClick={() => this.props.navigation.navigate('AddProduct')}
        />
        <MyButton title="Go To Edit Product"
          customClick={() => this.props.navigation.navigate('EditProduct')}
        />
      </View>
    );
  }
}