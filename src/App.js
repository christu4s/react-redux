import './App.css';
import { Provider } from "react-redux";

import Cart from "./component/Cart";
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Cart />
  </Provider>
  );
}

export default App;
