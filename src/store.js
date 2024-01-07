import {createStore} from 'redux'
import CartReducer from './reducer/cartReducer'


const store = createStore(CartReducer)

export default store;