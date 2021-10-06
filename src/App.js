import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} ></Route>
          <Route path="/details" component={Details} ></Route>
          <Route path="/cart" component={Cart} ></Route>
          <Route component={Default} ></Route>
        </Switch>
        <Modal />
      </>
    )
  }
}
