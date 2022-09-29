import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/products.js';
import { cartReducer } from './reducers/cart.js';
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/user.js';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const cartItemsFromLocalStorage = window.localStorage.getItem('cartItems')
  ? JSON.parse(window.localStorage.getItem('cartItems'))
  : [];

const userInfoFromLocalStorge = window.localStorage.getItem('userInfo')
  ? JSON.parse(window.localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromLocalStorge = window.localStorage.getItem(
  'shippingAddress'
)
  ? JSON.parse(window.localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorge,
  },
  userLogin: { userInfo: userInfoFromLocalStorge },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
