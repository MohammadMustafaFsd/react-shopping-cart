import React from "react";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
import store from "./store";

class App extends React.Component {
  constructor() {
    super();
    const cartItems = localStorage.getItem("cartItems");
    this.state = {
      cartItems: cartItems ? JSON.parse(cartItems) : []
    };
  }
  addToCart = (product) => {
    const cartItems = this.state.cartItems;
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems: cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let newCartItems = cartItems.filter((x) => x._id !== product._id);
    this.setState({ cartItems: newCartItems });
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };
  createOrder = (order) => {
    alert("need to save order for " + order.name);
  };
  render() {
    return (
      <Provider store={store}>
        <div className={"grid-container"}>
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter></Filter>
                <Products addToCart={this.addToCart}></Products>
              </div>
              <div className="sidebar">
                {" "}
                <Cart
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                  createOrder={this.createOrder}
                ></Cart>
              </div>
            </div>
          </main>
          <footer>All rights is reserved</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
