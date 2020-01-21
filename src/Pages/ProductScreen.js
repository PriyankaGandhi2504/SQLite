import React, { Component } from 'react';
import { View } from 'react-native';
import MyButton from './Component/MyButton';
import MyText from './Component/MyText';
import ProductDetails from './ProductDetailsScreen'
import AddProduct from './ProductAddScreen'
import EditProduct from './ProductEditScreen'
// import { openDatabase } from 'react-native-sqlite-storage';
// var db = openDatabase({ name: 'UserDatabase.db' });

export default class ProductScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     db.transaction(function (txn) {
    //         txn.executeSql(
    //             "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
    //             [],
    //             function (tx, res) {
    //                 console.log('item:', res.rows.length);
    //                 if (res.rows.length == 0) {
    //                     txn.executeSql('DROP TABLE IF EXISTS table_user', []);
    //                     txn.executeSql(
    //                         'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
    //                         []
    //                     );
    //                 }
    //             }
    //         );
    //     });
    // }

    static navigationOptions = {
        title: 'Product List',
      };
      
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
                <MyText text="SQLite Example" />

                <MyButton title="Go To Details"
                    customClick={() => this.props.navigation.navigate('ProductDetails')}
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