import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ProductScreen from './Pages/ProductScreen';
import ProductDetailsScreen from './Pages/ProductDetailsScreen';
import ProductAddScreen from './Pages/ProductAddScreen'
import ProductEditScreen from './Pages/ProductEditScreen'

const MainNavigator = createStackNavigator({
    Product: ProductScreen,
    ProductDetails: ProductDetailsScreen,
    AddProduct: ProductAddScreen,
    EditProduct: ProductEditScreen,
}, {
    initialRouteName : 'Product'
})

const Router = createAppContainer(MainNavigator)
export default Router