import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {add_item, delete_item} from '../action/CartAction'

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Number of items in Cart: {state.numOfItems}</h2>
      <button className="green" onClick={dispatch(add_item())}>Add Item to Cart</button>
      <button className="red" onClick={dispatch(delete_item())}>Remove Item from Cart</button>
    </div>
  );
};

export default Cart;