import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import toggleReducer from './cart/cart-reducer';

export default combineReducers({
    user: userReducer,
    toggle: toggleReducer
});